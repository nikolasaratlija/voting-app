<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Idea;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class IdeaTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_ok()
    {
        $this->get(route('ideas.index'))->assertOk();
    }

    public function test_index_shows_list_of_ideas()
    {
        $categoryOne = Category::factory()->create();
        $categoryTwo = Category::factory()->create();

        $ideaOne = Idea::factory()->create([
            'title' => 'First Idea',
            'category_id' => $categoryOne->id,
            'description' => 'First idea description'
        ]);

        $ideaTwo = Idea::factory()->create([
            'title' => 'Second Idea',
            'category_id' => $categoryTwo->id,
            'description' => 'Second idea description'
        ]);

        $response = $this->get(route('ideas.index'));

        $response->assertSee($ideaOne->title);
        $response->assertSee($ideaOne->description);
        $response->assertSee($categoryOne->name);

        $response->assertSee($ideaTwo->title);
        $response->assertSee($ideaTwo->description);
        $response->assertSee($categoryTwo->name);
    }

    public function test_single_idea_shows_on_the_show_page()
    {
        $idea = Idea::factory()->create();

        $response = $this->get(route('ideas.show', $idea));

        $response->assertSee($idea->title);
        $response->assertSee($idea->description);
    }
}
