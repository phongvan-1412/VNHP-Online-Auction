<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryAPI;
use App\Http\Controllers\ProductAPI;
use App\Http\Controllers\BillApi;
use App\Http\Controllers\CustomerApi;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FeedbackAPI;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//CATEGORIES
Route::get('/selectcategories',[CategoryAPI::class, 'SelectCategories']);
Route::post('/addcategory',[CategoryAPI::class,'AddCategory']);
Route::get('/addcategorytable',[CategoryAPI::class,'AddCategoryTable']);

Route::post('/updatecategory',[CategoryAPI::class,'UpdateCategory']);
Route::post('/changecategorystatus',[CategoryAPI::class,'UpdateCategoryStatus']);
Route::post('/checkexistscategory',[CategoryAPI::class,'CheckExistsCategory']);

//PRODUCTS
Route::get('/selectallproducts',[ProductAPI::class, 'SelectProductsByEndDate']);
Route::get('/selectproductsbycate', [ProductAPI::class, 'SelectProductsByCategory']);
Route::get('/selectproductsbystartdate', [ProductAPI::class, 'SelectProductsByStartDate']);
Route::get('/selectproductsbyenddate', [ProductAPI::class, 'SelectProductsByEndDate']);
Route::get('/selectproductstop15', [ProductAPI::class, 'SelectProductsTop15ByCountCustomerId']);
Route::get('/addproducttable',[ProductAPI::class,'AddProductTable']);
Route::get('/upcomingproducts',[ProductAPI::class,'UpComingProducts']);
Route::get('/endingsoonproducts',[ProductAPI::class,'EndingSoonProducts']);
Route::get('/hotauctionproducts',[ProductAPI::class,'HotAuctionProducts']);


Route::post('/checkexistsproduct',[ProductAPI::class,'CheckExistsProduct']);
Route::post('/editproduct',[ProductAPI::class,'EditProduct']);
Route::post('/countdownend', [ProductApi::class,'CountdownEnd']);
Route::post('/currentbidprice', [ProductApi::class,'CurrentBidPrice']);
Route::post('/addproduct',[ProductAPI::class,'AddProduct']);
Route::post('/changeproductstatus',[ProductAPI::class,'ChangeProductStatus']);
Route::post('/filterproductselect',[ProductAPI::class,'FilterProductSelect']);


//feedback
Route::post('/addcomment',[FeedbackAPI::class,'AddComment']);
Route::get('/showcomment',[FeedbackAPI::class,'ShowComment']);

//BILL
Route::post('/submitcart',[BillApi::class, 'InsertBill']);
Route::post('/currentbill',[BillApi::class, 'CurrentBill']);
Route::post('/getnewbill',[BillApi::class, 'GetNewBill']);
Route::post('/getbillhistory',[BillApi::class, 'GetBillHistory']);
Route::post('/getautionhistory',[BillApi::class, 'GetAutionHistory']);
//PAYMENT MODE
Route::post('/paybill',[BillApi::class, 'PayBill']);

//CUSTOMER
Route::post('/customerregister',[CustomerApi::class, 'CustomerRegister']);
Route::post('/isemailexists',[CustomerApi::class, 'IsEmailExists']);
Route::post('/customerlogin',[CustomerApi::class, 'CustomerLogin']);
Route::post('/customerlogout',[CustomerApi::class, 'CustomerLogOut']);
Route::post('/customerupdateinfo',[CustomerApi::class, 'CustomerUpdateInfo']);
Route::post('/customerchangeavatar',[CustomerApi::class, 'CustomerChangeAvatar']);
Route::post('/customerchangepassword',[CustomerApi::class, 'CustomerChangePassword']);
Route::post('/customercheckpassword',[CustomerApi::class, 'CustomerCheckPassword']);
Route::post('/customerforgetpassword',[CustomerApi::class, 'CustomerForgetPassword']);
Route::get('/getonlinevisitor',[CustomerApi::class, 'GetOnlineVisitor']);

Route::get('/customerautionhistory',[CustomerApi::class, 'CustomerAutionHistory']);
Route::get('/customerbillhistory',[CustomerApi::class, 'CustomerBillHistory']);
Route::get('/customernewbill',[CustomerApi::class, 'CustomerNewBill']);

Route::get('/customerinfo',[CustomerApi::class, 'CustomerInfo']);

// Route::get('/selectactiveblog',[BlogApi::class, 'SelectActiveBlog']);

// ---------------------- ADMIN -------------------------//

// LOGIN
Route::post('/login',[AdminController::class, 'Login']);
Route::post('/logout', [AdminController::class, 'Logout']);
Route::get('/getaccount',[AdminController::class, 'Getaccount']);

// BILL
Route::get('/selectbill',[BillApi::class, 'SelectBill']);
Route::post('/insertbill',[BillApi::class, 'InsertBill']);
 
//CUSTOMER 
Route::get('/customerdata',[BillApi::class, 'CustomerData']);

//FEEDBACK 
Route::get('/showfeedback',[FeedbackAPI::class, 'ShowFeedback']);
Route::get('/producthasfeedback',[FeedbackAPI::class, 'ProductHasFeedback']);
//CHART
Route::get('/revenueeachmonth', [BillApi::class, 'RevenueEachMonth']);
Route::get('/revenueeachyear', [BillApi::class, 'RevenueEachYear']);
Route::get('/toployalcustomer', [BillApi::class, 'TopLoyalCustomer']);
Route::get('/bestcategoryseller', [BillApi::class, 'BestCategorySeller']);
Route::get('/earninglastmonth',[BillApi::class, 'EarningLastMonth']);
Route::get('/countcustomer',[BillApi::class, 'CountCustomer']);
Route::get('/countproduct', [BillApi::class, 'CountProduct']);
Route::get('/countfeedback', [BillApi::class, 'CountFeedback']);
//PROFILE
Route::post('/changeavatar',[AdminController::class, 'ChangeAvatar']);
Route::post('/changeprofile',[AdminController::class, 'ChangeProfile']);
Route::post('/changepassword',[AdminController::class, 'ChangePassword']);
