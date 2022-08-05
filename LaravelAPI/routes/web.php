<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerApi;
use App\Http\Controllers\ProductAPI;
use App\Http\Controllers\BillApi;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/actived/{customer_id}/{customer_token}',[CustomerApi::class, 'CustomerActivedEmail'])->name('customer.actived');
Route::get('/forgetpassword', [CustomerApi::class, 'CustomerForgetPasswordView'])->name('forgetpass');
Route::get('/verifitionpayment/{aution_id}', [BillApi::class, 'VeritifitionPayment'])->name('product.payment');
Route::get('/cancelpayment/{customer_id}/{product_id}', [BillApi::class, 'CancelPayment'])->name('product.cancel');

Route::get('/confirmPaymentSucess', [BillApi::class, 'ConfirmPaymentView']);


