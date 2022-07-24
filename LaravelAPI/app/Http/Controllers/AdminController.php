<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function Login(Request $request){

        $admin = Admin::select()->where('emp_email',$request->email)
                                ->where('emp_pwd',md5($request->pwd))
                                ->first();
        if($admin){
            return 1;
        }else{
            return 0;
        }

    }
}
