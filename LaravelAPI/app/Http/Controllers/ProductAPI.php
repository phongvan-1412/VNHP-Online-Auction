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
        $tmp_products = DB::select("exec sp_select_products");
        $products = self::AddCollection($tmp_products);
        return $tmp_products;
    }

    public function AddCollection($arr)
    {
        $collection = collect();

        foreach($arr as $products)
        {
            $newProduct = new Product();
            $newProduct = $newProduct;
            $collection->add($newProduct);
            }

        return $collection;
    }
}
