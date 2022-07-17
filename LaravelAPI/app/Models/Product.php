<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $product_id;
    public $product_SKU;
    public $product_name;
    public $category_id;
    public $product_quatity;
    public $product_information;
    public $product_ingredients;
    public $product_instruction_use;
    public $product_instruction_store;
    public $product_img_name;
    public $product_price_per_unit;
    public $product_status;
    public $category_name;
    public $category_root;
    public $category_status;
}
