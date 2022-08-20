<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Idea;
use App\Models\User;
use App\Models\Vote;
use Database\Seeders\CategorySeeder;
use Database\Seeders\StatusSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class IdeaTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed([UserSeeder::class, StatusSeeder::class, CategorySeeder::class]);
    }

    public function test_index_ok()
    {
        $this->get(route('ideas.index'))->assertOk();
    }

    public function test_index_shows_list_of_ideas()
    {
        $ideaOne = Idea::factory()->create();
        $ideaTwo = Idea::factory()->create();

        $response = $this->get(route('ideas.index'));

        $response->assertSee($ideaOne->title);
        $response->assertSee($ideaOne->description);

        $response->assertSee($ideaTwo->title);
        $response->assertSee($ideaTwo->description);
    }

    public function test_single_idea_shows_on_the_show_page()
    {
        $idea = Idea::factory()->create();

        $response = $this->get(route('ideas.show', $idea));

        $response->assertSee($idea->title);
        $response->assertSee($idea->description);
    }

    //<editor-fold desc="authenticated user can ...">
    public function test_authenticated_user_can_create_idea()
    {
        $this->actingAs(User::factory()->create());
        $category = Category::factory()->create();

        $attributes = [
            'title' => fake()->sentence,
            'description' => fake()->sentence,
            'category_id' => $category->id
        ];

        $this->post(route('ideas.store', $attributes));

        $this->assertDatabaseHas('ideas', $attributes);
    }
    //</editor-fold>

    //<editor-fold desc="guest can/cannot ...">
    public function test_guest_cannot_create_idea()
    {
        $category = Category::factory()->create();

        $attributes = [
            'title' => fake()->sentence,
            'description' => fake()->sentence,
            'category_id' => $category->id
        ];

        $this->post(route('ideas.store', $attributes))
            ->assertRedirect('/login');

        $this->assertDatabaseMissing('ideas', $attributes);
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
