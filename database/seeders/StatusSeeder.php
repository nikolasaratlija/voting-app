<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::factory(['name' => 'open'])->create();
        Status::factory(['name' => 'considering'])->create();
        Status::factory(['name' => 'in_progress'])->create();
        Status::factory(['name' => 'implemented'])->create();
        Status::factory(['name' => 'closed'])->create();
    }
}
