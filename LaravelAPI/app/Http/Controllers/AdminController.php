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
        if(count($admin)>0){
            Admin::where('emp_email',$request->email)
            ->where('emp_pwd',$request->pwd)
            ->update(['emp_login_status' => 1]);
            return $admin;
        }else{
            return 0;
        }
    }

    public function Getaccount(){
        return Admin::select()->where('emp_email','nhan@gmail.com')
        ->where('emp_pwd','123123')->get();
    }
}
