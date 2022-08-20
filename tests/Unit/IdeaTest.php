<?php

namespace Tests\Unit;

use App\Models\Category;
use App\Models\Idea;
use App\Models\Status;
use App\Models\User;
use App\Models\Vote;
use Database\Seeders\StatusSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class IdeaTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed([UserSeeder::class, StatusSeeder::class]);
    }

    public function test_idea_belongs_to_user()
    {
        $idea = Idea::factory()->create();

        $this->assertInstanceOf(User::class, $idea->user);
    }

    public function test_idea_belongs_to_category()
    {
        $idea = Idea::factory()->create();

        $this->assertInstanceOf(Category::class, $idea->category);
    }

    public function test_idea_belongs_to_status()
    {
        $idea = Idea::factory()->create();

        $this->assertInstanceOf(Status::class, $idea->status);
    }

    public function test_idea_has_slug()
    {
        $idea = Idea::factory()->create(['title' => 'My Test Idea']);
        $this->assertEquals('my-test-idea', $idea->slug);
    }

    public function test_duplicate_idea_titles_has_different_slugs()
    {
        $title = 'My Test Idea';
        $idea = Idea::factory()->create(['title' => $title]);
        $ideaDuplicate = Idea::factory()->create(['title' => $title]);

        $this->assertEquals('my-test-idea', $idea->slug);
        $this->assertEquals('my-test-idea-1', $ideaDuplicate->slug);
    }

    //<editor-fold desc="store idea requires ...">
    public function test_store_idea_requires_title()
    {
        $this->actingAs(User::factory()->create());

        $ideaAttributes = Idea::factory()->raw([
            'title' => ''
        ]);

        $this->post(route('ideas.store'), $ideaAttributes)
            ->assertSessionHasErrors('title');
    }

    public function test_store_idea_requires_description()
    {
        $this->actingAs(User::factory()->create());

        $ideaAttributes = Idea::factory()->raw([
            'description' => ''
        ]);

        $this->post(route('ideas.store'), $ideaAttributes)
            ->assertSessionHasErrors('description');
    }

    public function test_store_idea_requires_category()
    {
        $this->actingAs(User::factory()->create());

        $ideaAttributes = Idea::factory()->raw([
            'category_id' => ''
        ]);

        $this->post(route('ideas.store'), $ideaAttributes)
            ->assertSessionHasErrors('category_id');
    }
    //</editor-fold>

    //<editor-fold desc="voting">
    public function test_authenticated_user_can_vote_for_idea()
    {
        // Arrange user and idea object
        $user = User::factory()->create();
        $idea = Idea::factory()->create(['status_id' => 1]);

        $this->assertFalse($idea->isVotedByUser($user)); // assert that user has not yet voted for idea
        $idea->addVote($user); // call to make user vote for an idea
        $this->assertTrue($idea->isVotedByUser($user)); // assert that user has voted for the idea
    }

    public function test_authenticated_user_can_remove_vote_from_idea()
    {
        // Arrange user and idea object
        $user = User::factory()->create();
        $idea = Idea::factory()->create(['status_id' => 1]);
        // simulate a situation where the user has already voted for the idea
        Vote::factory()->create([
            'user_id' => $user->id,
            'idea_id' => $idea->id
        ]);

        $this->assertTrue($idea->isVotedByUser($user)); // assert that user has voted for the idea
        $idea->removeVote($user); // call to remove the vote from the idea
        $this->assertFalse($idea->isVotedByUser($user)); // assert that the vote is removed from the idea
    }

    public function test_authenticated_user_cannot_vote_for_closed_idea()
    {
        // Arrange user and idea object
        $user = User::factory()->create();
        $idea = Idea::factory()->create(['status_id' => 5]); // idea with closed status

        $idea->addVote($user); // call to make user vote for an idea

        $this->assertFalse($idea->isVotedByUser($user)); // assert that the idea does not have a vote from the user
    }

    public function test_authenticated_cannot_duplicate_vote_for_idea()
    {
        $user = User::factory()->create();
        $idea = Idea::factory()->create(['status_id' => 1]);
        // simulate a situation where the user has already voted for the idea
        Vote::factory()->create([
            'user_id' => $user->id,
            'idea_id' => $idea->id
        ]);

        // expect that an exception should be thrown from the call following the next rule
        $this->expectException(QueryException::class);
        $idea->addVote($user); // call to vote an idea that the user has already voted for
    }
    //</editor-fold>
}
