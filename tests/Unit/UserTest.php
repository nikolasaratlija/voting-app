<?php

namespace Tests\Unit;

use App\Models\Idea;
use App\Models\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function user_has_many_ideas()
    {
        $user = User::factory()->create();

        $this->assertInstanceOf(Idea::class, $user->ideas);
    }
}
