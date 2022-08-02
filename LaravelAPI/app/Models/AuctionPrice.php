<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuctionPrice extends Model
{
    use HasFactory;
    protected $table = 'aution_price';
    protected $primaryKey = 'auction_id';
    public $timestamps = false;
    protected $fillable = [
        'aution_id',
        'customer_id',
        'product_id',
        'aution_price',
        'aution_date',
    ];
}