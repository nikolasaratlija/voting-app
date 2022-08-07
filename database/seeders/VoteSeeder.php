<?php

namespace Database\Seeders;

use App\Models\Idea;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userIds = User::all()->pluck('id');
        $ideasIds = Idea::all()->pluck('id');

        foreach ($userIds as $userId)
            foreach ($ideasIds as $ideasId)
                if ($userId % 2 === 1 && $ideasId % 2 === 1 || $userId % 2 === 0)
                    Vote::factory()->create([
                        'user_id' => $userId,
                        'idea_id' => $ideasId
                    ]);
    }
}
