<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Bill;
use App\Models\PaymentMode;
use App\Models\Product;
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
    public function CountProduct(){
        return DB::select("Select count(bill_id) as amount from bill");
    }
    public function CountFeedback(){
        return DB::select("Select count(feedback_id) as amount from feedback where feedback_content is not null");

    }
    public function CustomerData(){
        return DB::select("Select c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,sum(b.bill_payment) as total_spending
            from customer_account c
            join bill b
            on (b.customer_id = c.customer_id)
            group by c.customer_name,c.customer_img_name, c.customer_contact,c.customer_email, c.customer_dob, c.customer_address
            union
            Select c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,0 as total_spending
            from customer_account c
            group by c.customer_name,c.customer_img_name, c.customer_contact,c.customer_email, c.customer_dob, c.customer_address
        ");
    }

    public function CustomerPayBill(Request $req){
        $bills = Bill::select()->where('customer_id', $req->customerid)->where('bill_id', $req->billid)->get();
        $currentBill = '';
        foreach($bills as $bill){
            $currentBill = $bill;
        }
        return $currentBill;
    }

    public function PayBill(Request $request)
    {
        $newPayment = new PaymentMode();
        $newPayment->payment_mode_type = $request->paymentSource;
        $newPayment->orderId = $request->orderId;
        $newPayment->payId = $request->payId;
        $newPayment->payment_mode_date = $request->payment_mode_date;

        $newPayment->save();

        $payments = PaymentMode::select()->where('orderId', $request->orderId)->get();

        if(count($payments) > 0)
        {
            $tmp = '';
            foreach($payments as $payment)
            {
                $tmp = $payment;
            }

            Bill::where('bill_id', $request->billId)->update(['bill_status' => 1,'payment_mode_id'=>$tmp->payment_mode_id]);

            $products = DB::select("select * from product p join bill b on(p.product_id = b.product_id) where p.product_id = ".$request->billId);
            $product = '';
            foreach($products as $tmp)
            {
                $product = $tmp;
            }

            Product::select()->where('product_id',$request->product_id)->update(['product_status'=>0]);
            return 1;
        }
        return 0;
    }


    public function VeritifitionPayment($customer_id,$product_id,$payment)
    {
        $billDate = date('Y-m-d h:m:s', time());

        $newBillId = Bill::select()->where('product_id', $product_id)->where('customer_id', $customer_id)->get();

        $tmp = DB::select("select *
        from product p
        join aution_price ap on (p.product_id = ap.product_id)
        where p.product_price_aution = ap.aution_price and p.product_status = 3 and ap.customer_id = ".$customer_id);

        if(count($newBillId) <= 0 && count($tmp) > 0){
            DB::insert("insert into bill(product_id, bill_date, bill_payment, customer_id) values (?,?,?,?)",
             [$product_id, $billDate, $payment, $customer_id]);
            $url = "http://localhost:3000/login";
            return Redirect::intended($url);
        }
        return "Something wrong";
    }

    public function CancelPayment($customer_id,$product_id)
    {
        $products = Product::select()->where('product_id', $product_id)->get();

        if(count($products) > 0)
        {
            $product = '';
            foreach($products as $pro)
            {
                $product = $pro;
            }
            Product::select()->where('product_id',$product_id)
                                    ->update(['product_price_aution'=>$product->product_start_price,
                                                'product_status'=>2]);

            $url = "http://localhost:3000";
            return Redirect::intended($url);
        }
        return "Something wrong";
    }


}

