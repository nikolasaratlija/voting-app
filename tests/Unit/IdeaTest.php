<?php

namespace Tests\Unit;

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
}
