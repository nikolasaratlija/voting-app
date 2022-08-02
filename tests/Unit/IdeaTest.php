<?php

namespace Tests\Unit;

use App\Models\Category;
use App\Models\Idea;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class IdeaTest extends TestCase
{
    use RefreshDatabase;

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

    public function test_idea_has_slug()
    {
        $idea = Idea::factory()->create([
            'title' => 'My Test Idea'
        ]);

        $ideaDuplicate = Idea::factory()->create([
            'title' => 'My Test Idea'
        ]);

        $this->assertEquals('my-test-idea', $idea->slug);
        $this->assertEquals('my-test-idea-1', $ideaDuplicate->slug);
    }
}
