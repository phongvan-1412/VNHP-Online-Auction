<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMode extends Model
{
    use HasFactory;
    protected $table = 'payment_mode';
    protected $primaryKey = 'payment_mode_id';
    public $timestamps = false;
    protected $fillable = [
        'payment_mode_id',
        'payment_mode_date',
        'payment_mode_type',
        'orderId',
        'payId',
    ];
}