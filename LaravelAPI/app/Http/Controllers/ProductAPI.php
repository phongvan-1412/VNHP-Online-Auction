<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;
use App\Models\Bill;
use App\Models\AuctionPrice;
use Mail;
class ProductAPI extends Controller
{

    public function SelectAllProducts()
    {
        $tmp_products = DB::select("select p.product_id,p.product_end_aution_day,p.product_img_name1,p.product_img_name2,p.product_img_name3,p.product_information,
        p.product_ingredients,p.product_instruction_store,p.product_name,p.product_start_aution_day,p.product_start_price,p.product_status,p.product_thumbnail_img_name,
        c.category_name,c.category_status,c.category_id,max(ap.aution_price) as current_bid,ca.customer_name
        from product p 
        join category c on (p.category_id = c.category_id) 
        join customer_account ca on (p.owner_id = ca.customer_id)
        join aution_price ap on (p.product_id = ap.product_id)
        where p.product_status = 1 and c.category_status = 1
        group by p.product_id,p.product_end_aution_day,p.product_img_name1,p.product_img_name2,p.product_img_name3,p.product_information,
        p.product_ingredients,p.product_instruction_store,p.product_name,p.product_start_aution_day,p.product_start_price,p.product_status,p.product_thumbnail_img_name,
        c.category_name,c.category_status,c.category_id,ca.customer_name
        
        union
        
        select p.product_id,p.product_end_aution_day,p.product_img_name1,p.product_img_name2,p.product_img_name3,p.product_information,
        p.product_ingredients,p.product_instruction_store,p.product_name,p.product_start_aution_day,p.product_start_price,p.product_status,p.product_thumbnail_img_name,
        c.category_name,c.category_status,c.category_id,0,ca.customer_name
        from product p 
        join category c on (p.category_id = c.category_id) 
        join customer_account ca on (p.owner_id = ca.customer_id)
        where p.product_status = 1 and c.category_status = 1 and

		p.product_id not in (select p.product_id
        from product p 
        join category c on (p.category_id = c.category_id) 
        join customer_account ca on (p.owner_id = ca.customer_id)
        join aution_price ap on (p.product_id = ap.product_id)
        where p.product_status = 1 and c.category_status = 1
        )

        order by p.product_end_aution_day");
        return $tmp_products;
    }

    public function SelectProductsTop15ByCountCustomerId(){
        $tmp_products = DB::select("select top 15 * from product p join auction_price a on (
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
        $newProduct->product_start_price =  $request->product_start_price;
        $newProduct->product_start_aution_day=  $request->product_start_aution_day;
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
        $products = Product::select()->get();
        $paginate = [];

        for($i = 1; $i <= count($products)/10 + 1;$i++ )
        {
            $paginate[] = $i;
        }
        return $paginate;
    }

    public function PaginateProductTable(Request $request)
    {
        $products = Product::select()->get();
        $currentProducts = [];
        $tmp = 1;
        if($request->paginate > count($products)/10)
        {
            $tmp = (count($products)/10 - $request->paginate + 1) * 10;
            foreach($products as $product){
                $currentProducts[] = $product;
                if(count($currentProducts) > $tmp)
                {
                    break;
                }
            }
        }
        else
        {
            $tmp = $request->paginate*10;
            $getProduct = DB::select("select top ".$tmp." * from product order by product_id desc");
    
            foreach(array_reverse($getProduct) as $product){
                $currentProducts[] = $product;
                if(count($currentProducts) >= 10)
                {
                    break;
                }
            }
        }
        // return  response()->json(['data'=>array_reverse($currentProducts),'paginate'=>count($products)/10]);
        return array_reverse($currentProducts);
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
    
    public function CountdownEnd(Request $req_product)
    {
        $products = Product::select()->where('product_id', $req_product->countdownProduct)->get();

        if(count($products) > 0)
        {
            $productItem = '';
            foreach($products as $item){
                $productItem = $item;
            }

            $autionPrices = AuctionPrice::where('product_id',$req_product->countdownProduct)->where('aution_status',1)->get();

            $autionPrice = '';
            foreach($autionPrices as $item){
                $autionPrice = $item;
            }

            if ($autionPrice->aution_price <= $productItem->product_start_price){
                Product::where('product_id', $req_product->countdownProduct)->update(['product_status' => 2]);
            }else{
                Product::where('product_id', $req_product->countdownProduct)->update(['product_status' => 3]);
                
                
                $tmpCus = Customer::select()->where('customer_id', $autionPrice->customer_id)->get();
                $newCustomer = "";
    
                foreach($tmpCus as $customer)
                {
                    $newCustomer = $customer;
                }
                $payment = $autionPrice->aution_price;
                $aution_id = 
                Mail::send('emailVeritifiPayment', compact('newCustomer','productItem','autionPrice'), function($email) use($newCustomer,$productItem,$autionPrice){
                    $email->subject('VNHP Aution - Verify your payment');
                    $email->to($newCustomer->customer_email, $newCustomer->customer_name);
                });
                
                return 1;
            }
        }
        return 0;
    }
      
    public function CurrentBidPrice(Request $req)
    {
        $tmp = DB::table('aution_price')->select('product_id',DB::raw("MAX(aution_price) as aution_price"))
        ->where('product_id',$req->productId)->groupBy('product_id')->get();
        $products = Product::select()->where('product_id',$req->productId)->get();

        $productItem = "";
        foreach($products as $product){
            $productItem = $product;
        }

        $autionPrices = "";
        foreach($tmp as $ap){
            $autionPrices = $ap;
        }
        if(count($tmp) <= 0)
        {
            if(count($products) > 0)
            {
                if($req->realBidPrice >= $productItem->product_start_price)
                {
                    DB::insert("insert into aution_price(customer_id, product_id, aution_price, aution_day,aution_status) values (?,?,?,?,?)", 
                    [$req->customerId, $req->productId, $req->realBidPrice, $req->auctionDay,1]);  
                    return 1;
                }
            }
        }
        else{
            if(count($products) > 0)
            {
                if($req->realBidPrice > $autionPrices->aution_price)
                {
                    AuctionPrice::where('product_id',$req->productId)->update(['aution_status'=>0]);

                    DB::insert("insert into aution_price(customer_id, product_id, aution_price, aution_day,aution_status) values (?,?,?,?,?)", 
                    [$req->customerId, $req->productId, $req->realBidPrice, $req->auctionDay,1]);  
                    return 1;
                }
            }
        }
        return 0;
    }
    
    public function ChangeProductStatus(Request $request)
    {
        $product = Product::select()->where('product_id', $request->product_id)->get();
        if(count($product) > 0){
            Product::select()->where('product_id',$request->product_id)
                                    ->update(['product_status'=>$request->product_status]);
            return 1;
        }
        return 0;
    }

    public function EditProduct(Request $request)
    {
        $products = Product::select()->where('product_id', $request->product_id)->get();
        $productItem = '';
        foreach($products as $item){
            $productItem = $item;
        }
        if(count($products) > 0){
            
            Product::select()->where('product_id',$request->product_id)
                                    ->update(['product_name'=>$request->product_name,
                                    'category_id'=>$request->category_id,
                                    'product_start_price'=>$request->product_start_price,
                                    'product_start_aution_day'=>$request->product_start_aution_day,
                                    'product_end_aution_day'=>$request->product_end_aution_day]);

            return 1;
        }
        return 0;
    }
    public function UpComingProducts()
    {
        return DB::select("select * from product p join category c 
        on (p.category_id = c.category_id)
        where p.product_status = 1 and convert(datetime, product_start_aution_day, 120) > getdate() 
        order by p.product_start_aution_day");
    }

    public function EndingSoonProducts()
    {
        return DB::select("select * from product p join category c 
        on (p.category_id = c.category_id)
        where p.product_status = 1 and convert(datetime, product_end_aution_day, 120) > getdate() 
        order by p.product_end_aution_day
        ");
    }

    public function HotAuctionProducts()
    {
        return DB::select("select p.product_id,count(ap.aution_id) as count_auction,max(ap.aution_price) as current_bid,p.product_name,p.category_id,p.owner_id,
        p.product_information,p.product_ingredients,p.product_instruction_store,p.product_thumbnail_img_name,p.product_img_name1
        ,p.product_img_name2,p.product_img_name3,p.product_start_price,p.product_start_aution_day,p.product_end_aution_day,c.category_name from product p
        join category c on (p.category_id = c.category_id)
        join aution_price ap on(p.product_id = ap.product_id)
        where p.product_status = 1 and convert(datetime, product_end_aution_day, 120) > getdate() 
        group by p.product_id,p.product_name,p.category_id,p.owner_id, c.category_name,
        p.product_information,p.product_ingredients,p.product_instruction_store,p.product_thumbnail_img_name,p.product_img_name1
        ,p.product_img_name2,p.product_img_name3,p.product_start_price,p.product_start_aution_day,p.product_end_aution_day
        order by count(ap.aution_id)");
    }

    public function FilterProductSelect(Request $request){
    // { return $request->now;
        $date = date("Y-m-d");
        if($request->option == 0){
            $product = Product::select()->where('category_id', $request->categoryId)->get();
            return $product;

        }

        if($request->option == 1){
            $product = Product::select()
            ->where('category_id', $request->categoryId)
            ->where('product_start_aution_day','<=',$date)
            ->where('product_end_aution_day','>=',$date)
            ->get();
            return $product;      
        }
        
        return $product;
    }

}
