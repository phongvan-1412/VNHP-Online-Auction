<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    public $bill_id;
    public $bill_date;
    public $total_payment;
    public $customer_id;
    public $emp_id;
    public $payment_mode_id;
}
