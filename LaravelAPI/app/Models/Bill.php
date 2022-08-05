<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    protected $table = 'bill';
    protected $primaryKey = 'bill_id';
    public $timestamps = false;
    protected $fillable = [
        'bill_date',
        'payment_mode_id',
        'bill_status',
        'aution_id'
    ];
}
