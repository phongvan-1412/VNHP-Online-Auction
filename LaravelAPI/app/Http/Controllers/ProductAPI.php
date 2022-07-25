<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
class ProductAPI extends Controller
{

    public function SelectProducts()
    {
        $tmp_products = DB::select("select * from product");
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
        $newProduct->product_thumnail_img_name =  $request->product_thumnail_img_name;
        $newProduct->product_img1_name =  $request->product_img1_name;
        $newProduct->product_img2_name =  $request->product_img2_name;
        $newProduct->product_img3_name =  $request->product_img3_name;
        $newProduct->product_information =  $request->product_information;
        $newProduct->product_ingredients =  $request->product_ingredients;
        $newProduct->product_instruction_store =  $request->product_instruction_store;
        $newProduct->product_instruction_use =  $request->product_instruction_use;
        $newProduct->product_price_aution =  $request->product_price_per_un ;
        $newProduct->product_price_start =  $request->product_price_start;
        $newProduct->product_start_aution_day=  $request->product_start_aution_day;
        $newProduct->product_end_aution_day=  $request->product_end_aution_day;





        $isExist = Product::select()->where('product_name',$newProduct->product_name)->exists();

        if(!$isExist)
        {
            $newProduct->save();
            return 1;
        }
       
        return 0;         
            
    }
}
