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
    // table
    public function AddProductTable(){

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
        $newProduct->product_end_aution_day=  $request->product_end_aution_day;

        $isExist = Product::select()->where('product_name',$newProduct->product_name)->exists();

        if(!$isExist)
        {
            $newProduct->save();
            
            $product_thumbnail_img->move(public_path('ProductImg'), time().'-'.'product.'.$request->img_extension);
            $product_img_name1->move(public_path('ProductImg'),  time().'-'.'product.'.$request->img_extension1);
            $product_img_name2->move(public_path('ProductImg'),  time().'-'.'product.'.$request->img_extension2);
            $product_img_name3->move(public_path('ProductImg'),  time().'-'.'product.'.$request->img_extension3);

            return 1;
        }
       
        return 0;         
    }
}
