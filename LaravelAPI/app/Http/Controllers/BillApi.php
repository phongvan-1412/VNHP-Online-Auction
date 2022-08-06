<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Bill;
use App\Models\PaymentMode;
use App\Models\Product;
use Carbon\Carbon;
use DateTime;
use Redirect;
use Illuminate\Support\Facades\DB;

class BillApi extends Controller
{
    public function SelectAllBill(){
        $bill = DB::select("select * from bill");
        return $bill;
    }

    public function GetNewBill(Request $request)
    {
        return DB::table('bill')
        ->join('aution_price', 'aution_price.aution_id','=','bill.aution_id')
        ->join('product','aution_price.product_id','=','product.product_id')
        ->where('aution_price.customer_id',$request->customer_id)
        ->where('bill.bill_status',0)
        ->get();
    }

    public function GetBillHistory(Request $request)
    {
        return DB::table('bill')
        ->join('aution_price', 'aution_price.aution_id','=','bill.aution_id')
        ->join('product','aution_price.product_id','=','product.product_id')
        ->join('payment_mode','bill.payment_mode_id','=','payment_mode.payment_mode_id')
        ->where('aution_price.customer_id',$request->customer_id)
        ->where('bill.bill_status',1)
        ->get();
    }

    public function GetAutionHistory(Request $request)
    {
        return DB::table('product')
        ->join('aution_price','aution_price.product_id','=','product.product_id')
        ->where('aution_price.customer_id',$request->customer_id)
        ->where('aution_price.aution_status',1)
        ->get();
    }

    public function SelectBill()
    {
        $bills = DB::table('aution_price')->select()->get();
        // $bills = DB::delete("delete from bill where bill_id > 1023");
        // $bills = DB::table('bill')->insert([
        //     'bill_date'=>"2021-07-22",
        //     'bill_status'=>0,
        //     'aution_id'=>1146,
        // ])->get();
        // $bills = DB::table('bill as b')
        //     ->join('aution_price as a', 'a.aution_id','=','b.aution_id')
        //     ->join('payment_mode as pm','pm.payment_mode_id','=','b.payment_mode_id')
        //     ->join('product as p','p.product_id','=','a.product_id')
        //     ->join('customer_account as ca','ca.customer_id','=','a.customer_id')
        //     ->where('aution_status',1)
        //     ->select()
        //     ->get();
        return $bills;
    }

    public function InsertBill(Request $request){
        $bill = new Bill();
        $bill->bill_date = $request->bill_date;
        $bill->payment_mode_id = $request->payment_mode_id;
        $bill->bill_status = $request->bill_status;
        $bill->aution_id = $request->aution_id;
        $bill->save();
        return 1;
    }
    public function RevenueEachMonth(){
        return DB::select("Select month(convert(datetime, b.bill_date, 120)) as months, sum(a.aution_price) as revenues
            from bill b join aution_price a on (a.aution_id = b.aution_id)
            where year(convert(datetime, b.bill_date, 120)) = 2022
            and a.aution_status = 1
            group by month(convert(datetime, b.bill_date, 120))");
    }

    public function RevenueEachYear(){
        return DB::select("Select year(convert(datetime, b.bill_date, 120)) as years, sum(a.aution_price) as revenues
            from bill b join aution_price a on (a.aution_id = b.aution_id)
            where year(convert(datetime, bill_date, 120)) between 2018 and 2022
            and a.aution_status = 1
            group by year(convert(datetime, b.bill_date, 120))");
    }
    public function TopLoyalCustomer(){
        return  DB::select("Select top 5 c.customer_id, c.customer_img_name, c.customer_name, c.customer_contact, sum(a.aution_price) as total_spending
            from customer_account c
            join aution_price a on (a.customer_id = c.customer_id)
            join bill b on (b.aution_id = a.aution_id)
            group by c.customer_id, c.customer_name,c.customer_img_name,
            customer_contact order by total_spending desc");
    }

    public function BestCategorySeller(){
        return DB::select("Select c.category_name, count(a.product_id) as amount
            from product p
            join aution_price a on (a.product_id = p.product_id)
            join category c on (c.category_id = p.category_id)
            join bill b on (b.aution_id = a.aution_id)
            group by c.category_name
            order by c.category_name");
    }
    public function EarningLastMonth(){
        return DB::select("Select month(convert(datetime, b.bill_date, 120)) as month, sum(a.aution_price) as revenues
        from bill b join aution_price a on (a.aution_id = b.aution_id)
        where  DATEDIFF(month, convert(datetime, b.bill_date, 120), getdate()) = 1 and year(convert(datetime, b.bill_date, 120)) = year(GETDATE())
        group by month(convert(datetime, b.bill_date, 120))");
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

    public function CustomerHistoryData(){
        return DB::table('product as p')
            ->join('aution_price as a','a.product_id','=','p.product_id')
            ->join('customer_account as ca','ca.customer_id','=','a.customer_id')
            ->join('category as c','c.category_id','p.category_id')
            ->get();
    }

    public function CurrentBill(Request $req)
    {
        $bills = DB::table('bill')
        ->join('aution_price', 'aution_price.aution_id','=','bill.aution_id')
            ->where('bill.bill_id',$req->billid)->get();
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

        $payments = PaymentMode::select()->where('orderId', $request->orderId)->get();

        if(count($payments) <= 0)
        {
            $newPayment->save();
            $payments = PaymentMode::select()->where('orderId', $request->orderId)->get();

            $tmp = '';
            foreach($payments as $payment)
            {
                $tmp = $payment;
            }

            Bill::where('bill_id', $request->billId)->update(['bill_status' => 1,'payment_mode_id'=>$tmp->payment_mode_id]);

            $products = DB::table('bill')
                    ->join('aution_price', 'aution_price.aution_id','=','bill.aution_id')
                    ->join('product','aution_price.product_id','=','product.product_id')
                    ->where('bill.bill_id',$request->billId)
                    ->where('bill.bill_status',1)
                    ->get();

            $product = '';
            foreach($products as $tmp)
            {
                $product = $tmp;
            }

            Product::select()->where('product_id',$product->product_id)->update(['product_status'=>4]);
            return 1;
        }
        return 0;
    }


    public function VeritifitionPayment($aution_id)
    {
        $billDate = date('Y-m-d h:m:s', time());

        $newBillId = Bill::select()->where('aution_id', $aution_id)->get();

        if(count($newBillId) <= 0){
            DB::insert("insert into bill(bill_date,bill_status,aution_id) values (?,?,?)",
             [$billDate,0,$aution_id]);
            return redirect('/confirmPaymentSucess');
        }
        return "Something wrong in server. Please contact admin to have further details";
    }

    public function ConfirmPaymentView()
    {
        return view("/confirmPaymentSucess");
    }

    public function AddBillTable(){
        $customer = DB::select("Select * from bill b join aution_price a on a.aution_id = b.aution_id
        join payment_mode pm on pm.payment_mode_id = b.payment_mode_id
        join product p on p.product_id = a.product_id
        join customer_account ca on ca.customer_id = a.customer_id
        where aution_status = 1");
        $paginate = [];

        for($i = 1; $i <= count($customer)/10 + 1; $i++){
            $paginate[] = $i;
        }
        return $paginate;
    }
    public function PaginateBillTable(Request $request){
        $customers = DB::select("Select * from bill b join aution_price a on a.aution_id = b.aution_id
        join payment_mode pm on pm.payment_mode_id = b.payment_mode_id
        join product p on p.product_id = a.product_id
        join customer_account ca on ca.customer_id = a.customer_id
        where aution_status = 1");

        $currentCustomer = [];
        $tmp = 1;
        if($request->paginate > count($customers)/10){

            $tmp = (count($customers)/10 - $request->paginate + 1) * 10;
            foreach($customers as $customer){
                $currentCustomer[] = $customer;
                if(count($currentCustomer) > $tmp){
                    break;
                }
            }
        }else{
            $tmp = $request->paginate*10;
            $getCustomer = DB::select("Select top ".$tmp." * from bill b join aution_price a on a.aution_id = b.aution_id
            join payment_mode pm on pm.payment_mode_id = b.payment_mode_id
            join product p on p.product_id = a.product_id
            join customer_account ca on ca.customer_id = a.customer_id
            where aution_status = 1");

            foreach(array_reverse($getCustomer) as $product){
                $currentCustomer[] = $product;
                if(count($currentCustomer) >= 10){
                    break;
                }
            }
        }
        return array_reverse($currentCustomer);
    }

}

