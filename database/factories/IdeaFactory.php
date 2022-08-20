<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Idea>
 */
class IdeaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => Category::all()->random()->id,
            'user_id' => User::all()->random()->id,
            'status_id' => Status::all()->random()->id,
            'title' => fake()->sentence,
            'description' => fake()->paragraph(5)
        ];
    }
}
