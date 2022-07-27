<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $primaryKey = 'product_id';
    public $timestamps = false;
    protected $fillable = [
        'product_id',
        'owner_id',
        'product_SKU',
        'product_name',
        'category_id',
        'product_information',
        'product_ingredients',
        'product_instruction_use',
        'product_instruction_store',
        'product_thumbnail_img_name',
        'product_img_name1',
        'product_img_name2',
        'product_img_name3',
        'product_start_price',
        'product_price_aution',
        'product_start_aution_day',
        'product_end_aution_day',
        'product_status',
    ];
}
