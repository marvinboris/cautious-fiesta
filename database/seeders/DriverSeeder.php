<?php

namespace Database\Seeders;

use App\Models\Driver;
use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $drivers = [
            [
                'category_id' => 1,
                'first_name' => 'John',
                'last_name' => 'Doe',
                'nid' => '116455919',
                'driving_license' => '123456789',
                'card' => '12345',
            ],
        ];

        foreach ($drivers as $driver) {
            Driver::create($driver);
        }
    }
}
