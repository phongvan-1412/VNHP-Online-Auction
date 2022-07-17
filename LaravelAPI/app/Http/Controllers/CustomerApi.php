<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\DB;
class CustomerApi extends Controller
{
    public function CustomerLoginInfo()
    {
        // $data = [
        //     'customer_id'    => Session::get('customer_id'),
        //     'customer_name'  => Session::get('customer_name'),
        //     'customer_email' => Session::get('customer_email'),
        //     'customer_pwd'   => Session::get('customer_pwd'),
        //     'customer_contact' => Session::get('customer_contact'),
        //     'customer_dob'   => Session::get('customer_dob'),
        //     'customer_img_name' => Session::get('customer_img_name'),
        //     'customer_address' => Session::get('customer_address'),
        //     'status' => Session::get('status'),
        //     'token' => Session::get('token'),
        // ];

        $customer_id =  Session::get('customer_id');
        $user = DB::table('customer_account')->where('customer_id',$customer_id)->get();

        return $user;
    }
}
