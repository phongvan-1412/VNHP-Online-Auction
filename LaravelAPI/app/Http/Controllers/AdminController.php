<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function Login(Request $request){

        $admin = Admin::select()->where('emp_email',$request->email)
                                ->where('emp_pwd',$request->pwd)
                                ->get();
        return $admin;

    }
}
