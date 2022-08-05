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
        DB::table('statuses')->insert(['name' => 'open']);
        DB::table('statuses')->insert(['name' => 'considering']);
        DB::table('statuses')->insert(['name' => 'in progress']);
        DB::table('statuses')->insert(['name' => 'implemented']);
        DB::table('statuses')->insert(['name' => 'closed']);
    }
}
