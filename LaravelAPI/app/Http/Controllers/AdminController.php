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
        $tmpAdmin = new Admin;

        foreach($admin as $ad){
            $tmpAdmin = $ad;
        }
        if(count($admin)>0){
            Admin::where('emp_email',$request->email)
            ->where('emp_pwd',$request->pwd)
            ->update(['emp_login_status' => 1]);
            return $tmpAdmin;
        }else{
            return 0;
        }
    }


    public function Logout(Request $request)
    {
        $admin = Admin::select()->where('emp_id', $request->emp_id)->get();
        
        if(count($admin) > 0)
        {
            Admin::where('emp_id', $request->emp_id)->update(['emp_login_status'=>0]);
            return 1;
        }
        return 0;
    }

    public function Getaccount(){
         
        $admin = Admin::select()->where('emp_email','nhan@gmail.com')->where('emp_pwd','123123')->get();
        
        $tmpAdmin = new Admin;
        foreach($admin as $ad){
            $tmpAdmin = $ad;
        }
        return $tmpAdmin;
    }
}
