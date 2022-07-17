<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillDetail extends Model
{
    use HasFactory;
    public $bill_id;
    public $product_id;
    public $bill_detail_quantity;
    public $price_per_unit;
    public $bill_detail_total_payment;
}
