<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\My\DashboardController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [LandingPageController::class, 'index'])->name('landing.index');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');

Route::prefix('my')->group(function() {
    Route::get('/', DashboardController::class)->name('my.dashboard.index');

    // Route::group(['middleware' => 'auth'], function() {
        require __DIR__ . '/authorization.php';
    // });

});
