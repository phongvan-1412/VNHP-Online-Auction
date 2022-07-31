<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $table = 'employee_account';
    protected $primaryKey = 'emp_id';
    public $timestamps = false;
    protected $fillable = [
        'emp_name',
        'emp_email',
        'emp_pwd',
        'emp_contact',
        'emp_dob',
        'emp_img_name',
        'emp_address',
        'emp_status',
        'emp_login_status'
    ];
}
