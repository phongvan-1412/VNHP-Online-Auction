<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use App\Models\Bill;
use App\Models\AuctionPrice;

class ProductAPI extends Controller
{

    public function SelectProducts()
    {
        $tmp_products = DB::select("select * from product p join category c on (p.category_id = c.category_id) join customer_account cc on (p.owner_id = cc.customer_id) ");
        return $tmp_products;
    }

    public function SelectProductsByCategory($id){
        $tmp_products = DB::select("select * from product where category_id = $id");
        return $tmp_products;
    }

    public function SelectProductsByStartDate($start_date){
        $tmp_products = DB::select("select * from product where product_start_aution_day = $start_date");
        return $tmp_products;
    }

    public function SelectProductsByEndDate($end_date){
        $tmp_products = DB::select("select * from product where product_end_aution_day = $end_date");
        return $tmp_products;
    }

    public function SelectProductsTop15ByCountCustomerId(){
        $tmp_products = DB::select
        ("select top 15 * from product p join auction_price a on (
            p.product_id = a.product_id) 
            group by p.product_id
            order by count(a.customer_id)");
        return $tmp_products;
    }
    
    public function AddProduct(Request $request){
        $newProduct = new Product();
        $newProduct->product_name =  $request->product_name;
        $newProduct->category_id =  $request->category_id;

        $product_thumbnail_img = $request->file('product_thumbnail_img');
        $newProduct->product_thumbnail_img_name = time().'-'.'product'.$request->img_extension;

        $product_img_name1 = $request->file('product_img_name1');
        $newProduct->product_img_name1 = time().'-'.'product1'.$request->img_extension1;

        $product_img_name2 = $request->file('product_img_name2');
        $newProduct->product_img_name2 =  time().'-'.'product2'.$request->img_extension2;

        $product_img_name3 = $request->file('product_img_name3');
        $newProduct->product_img_name3 = time().'-'.'product3'. $request->img_extension3;

        $newProduct->product_information =  $request->product_information;
        $newProduct->product_ingredients =  $request->product_ingredients;
        $newProduct->product_instruction_store =  $request->product_instruction_store;
        $newProduct->product_instruction_use =  $request->product_instruction_use;
        $newProduct->product_start_price =  $request->product_start_price;
        $newProduct->product_start_aution_day=  $request->product_start_aution_day;
        $newProduct->product_price_aution=  $request->product_start_price;
        $newProduct->product_end_aution_day=  $request->product_end_aution_day;

        $isExist = Product::select()->where('product_name',$newProduct->product_name)->exists();

        if(!$isExist)
        {
            $newProduct->save();
            
            $product_thumbnail_img->move(public_path('ProductImg'), $newProduct->product_thumbnail_img_name);
            $product_img_name1->move(public_path('ProductImg'),  $newProduct->product_img_name1);
            $product_img_name2->move(public_path('ProductImg'), $newProduct->product_img_name2);
            $product_img_name3->move(public_path('ProductImg'),  $newProduct->product_img_name3);

            return 1;
        }
       
        return 0;         
    }
    // table
    public function AddProductTable(){
        $getProduct = Product::select()->get();
        return ( $getProduct);
    }

    public function CheckExistsProduct(Request $request)
    {
        $products = Product::select()->where('product_name',$request->product_name)->get();

        if(count($products) > 0)
        {
            return 1;
        }
        return 0;
    }
    
    public function CountdownEnd(Request $req_product){
        $countDownEnd = new Product();
        $product = Product::select()->where('product_id', $req_product->countdownProduct)->get();
        
        $productItem = '';
        foreach($product as $item){
            $productItem = $item;
        }

        if ($productItem->product_price_aution <= $productItem->product_start_price){
            Product::where('product_id', $req_product->countdownProduct)->update(['product_status' => 2]);
            // DB::select("update product set product_status = 2 where product_id = $req_product->countdownProduct");           
        }else{
            Product::where('product_id', $req_product->countdownProduct)->update(['product_status' => 3]);
            $countDownDate = date('Y-m-d h:m:s', time());
            
            $newBillId = Bill::select()->where('product_id', $req_product->countdownProduct)->where('customer_id', $req_product->countdownCustomer)->get();


            if(count($newBillId) <= 0){
                DB::insert("insert into bill(product_id, bill_date, bill_payment, customer_id) values (?,?,?,?)", [$req_product->countdownProduct, $countDownDate, $productItem->product_price_aution, $req_product->countdownCustomer]);  
            }
            $newbill = Bill::select()->where('product_id', $req_product->countdownProduct)->get();

            return $newbill;
        }
    }

    public function CurrentBidPrice(Request $req){
        $products = Product::select()->where('product_id', $req->productId)->get();

        $productItem = '';
        foreach($products as $product){
            $productItem = $product;
        }

        if ($req->realBidPrice <= $productItem->product_start_price) 
            return 0;

            Product::where('product_id', $req->productId)->update(['product_price_aution' => $req->realBidPrice]);

            DB::insert("insert into aution_price(customer_id, product_id, aution_price, aution_day) values (?,?,?,?)", 
            [$req->customerId, $req->productId, $req->realBidPrice, $req->auctionDay]);  

            return 1;

    }
}
