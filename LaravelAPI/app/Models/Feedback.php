<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;
    protected $table = 'feedback';
    protected $primaryKey = 'feedback_id';
    public $timestamps = false;
    protected $fillable = [
        'feedback_id',
        'feedback_content',
        'customer_id',
        'product_id',
        'feedback_status',
        'feedback_date'
    ];
}