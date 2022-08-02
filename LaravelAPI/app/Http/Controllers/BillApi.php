<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Bill;
use App\Models\BillDetail;
use App\Models\Product;
use App\Models\Customer;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;

class BillApi extends Controller
{
    public function SelectAllBill(){
        $bill = DB::select("select * from bill")->get();
        return $bill;
    }

    public function SelectBill()
    {
        // $bills = Bill::select()->get();
        // $bills = DB::delete("delete from bill where bill_payment = 1257000000");
        $bills = DB::table('bill')
            ->join('product', 'product.product_id','=','bill.product_id')
            ->join('customer_account','customer_account.customer_id','=','bill.customer_id')
            ->get();
        return $bills;
    }

    public function InsertBill(Request $request){
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
    public function RevenueEachMonth(){
        return DB::select("Select month(convert(datetime, bill_date, 120)) as months, sum(bill_payment) as revenues
                            from bill where year(convert(datetime, bill_date, 120)) = ? group by month(convert(datetime, bill_date, 120))",[2022]);
    }

    public function RevenueEachYear(){
        return DB::select("Select year(convert(datetime, bill_date, 120)) as years, sum(bill_payment) as revenues
                            from bill where year(convert(datetime, bill_date, 120)) between ? and ? group by year(convert(datetime, bill_date, 120))",[2018,2022]);
    }
    public function TopLoyalCustomer(){
        return  DB::select("Select top 5 c.customer_img_name,
            c.customer_name, customer_contact, sum(b.bill_payment) as total_spending
            from customer_account c join bill b on (b.customer_id = c.customer_id)
            group by c.customer_name,c.customer_img_name,
            customer_contact order by total_spending desc");
    }

    public function BestCategorySeller(){
        return DB::select("Select c.category_name, count(b.product_id) as amount
            from product p
            join category c on (c.category_id = p.category_id)
            join bill b on (b.product_id = p.product_id)
            group by c.category_name
            order by c.category_name");
    }
    public function EarningLastMonth(){
        return DB::select("Select month(convert(datetime, bill_date, 120)) as month, sum(bill_payment)as revenues from bill
        where  DATEDIFF(month, convert(datetime, bill_date, 120), getdate()) = 1 and year(convert(datetime, bill_date, 120)) = year(GETDATE())
        group by month(convert(datetime, bill_date, 120))");
    }
    public function CountCustomer(){
        return DB::select("Select count(customer_id) as amount from customer_account ");
    }

    public function CustomerPayBill(Request $req){
        $bills = Bill::select()->where('customer_id', $req->customerid)->where('bill_id', $req->billid)->get();

        $currentBill = '';
        foreach($bills as $bill){
            $currentBill = $bill;
        }
        return $currentBill;
    }
}

