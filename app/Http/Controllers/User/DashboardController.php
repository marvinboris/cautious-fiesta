<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Driver;
use App\Models\User;
use App\Models\Category;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $subscriptionsAmount = 0;

        $totalCustomers = Driver::count();

        $expenses = Category::count();

        $totalCase = User::count();

        return response()->json([
            'blocksData' => [
                'subscriptionsAmount' => $subscriptionsAmount,
                'totalCustomers' => $totalCustomers,
                'expenses' => $expenses,
                'totalCase' => $totalCase,
            ],
            'tasks' => [],
            'attendanceReport' => [],
            'calendar' => [],
            'chatBox' => [],
            'messages' => [],
            'workTimeTracker' => [],
        ]);
    }
}
