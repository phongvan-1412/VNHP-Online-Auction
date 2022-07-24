<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Bill;
use App\Models\BillDetail;
use App\Models\Product;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;

class BillApi extends Controller
{
    // public function InsertBill(Request $cart)
    // {
    //     // tạo bill mới

    //     $current_date = Carbon::now()->toDateTimeString();
    //     DB::table('bill')->insert([
    //         'bill_date' => $current_date,
    //        ]);
    //     $current_bill = DB::table('bill')->where('bill_date', $current_date)->get();
    //     $bill_id = 0;
    //     foreach($current_bill as $bill)
    //     {
    //         $bill_id = $bill->bill_id;
    //     }
    //     // duyệt mảng bill_detail
    //     $currentProduct = self::ProductCollection($cart->input());

    //     foreach($currentProduct as $product)
    //     {
    //         $newBill = new BillDetail();
    //         $newProduct = new Product();
    //         $newProduct = $product;

    //         $newBill->bill_id = $bill_id;
    //         $newBill->product_id =  $newProduct['product_id'];
    //         $newBill->bill_detail_quantity = $newProduct['product_quantity'];
    //         $newBill->price_per_unit = $newProduct['product_price_per_unit'];
    //         $newBill->bill_detail_total_payment = $newProduct['product_price_per_unit'] * $newProduct['product_quantity'];

    //         DB::insert('insert into bill_detail (bill_id, product_id,bill_detail_quantity,price_per_unit,bill_detail_total_payment) 
    //                     values (?, ?,?,?,?)', 
    //                     [$newBill->bill_id, $newBill->product_id,$newBill->bill_detail_quantity,$newBill->price_per_unit,$newBill->bill_detail_total_payment]);
    //     }
    // }
    
    public function SelectBill()
    {
        $bills = Bill::select()->get();
        return $bills;
    }

    public function InsertBill(request $request){
        $bill = new Bill();
        $bill->product_id = $request->product_id;
        $bill->bill_date = $request->bill_date;
        $bill->bill_payment = $request->bill_payment;
        $bill->customer_id = $request->customer_id;
        $bill->payment_mode_id = $request->payment_mode_id;
        $bill->bill_status = $request->bill_status;
        $bill->save();
        return 1;
    }
    // public function SelectBillDetail()
    // {
    //     $bill_details = DB::table('bill_detail')->get();
    //     return $bill_details;
    // }

    // public function ProductCollection($arr)
    // {
    //     $collection = collect();

    //     foreach($arr as $category)
    //     {
    //         $newCategory = new Product();
    //         $newCategory = $category;
    //         $collection->add($newCategory);
    //         }

    //     return $collection;
    // }
}
