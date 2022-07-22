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
}
