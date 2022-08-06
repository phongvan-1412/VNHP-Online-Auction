<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Customer;
use App\Models\Product;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;


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

    public function ChangeAvatar(request $request){
        $admins = Admin::select()->where('emp_email',$request->emp_email)->get();
        if(count($admins) > 0){
            foreach($admins as $admin){

                if($admin->emp_img_name != 'default_account_image.jpg'){
                    File::delete(public_path('AdminImage/'.$admin->emp_img_name));
                }
                Admin::select()->where('emp_email',$request->emp_email)->update([
                    'emp_img_name'=>time().'-avatar'.$request->extension
                ]);

                $avatar = $request->file('avatar');
                $avatar->move(public_path('AdminImage'), time().'-avatar'.$request->extension);
            }
            $newAdmin = Admin::select()->where('emp_email',$request->emp_email)->get();
            foreach($newAdmin as $Admin)
            {
                return $Admin;
            }
        }else{
            return 0;
        }
    }
    public function ChangeProfile(request $request){
        $admins = Admin::select()->where('emp_email',$request->email)->get();
        if(count($admins) > 0){
            Admin::select()->where('emp_email',$request->email)->update([
                'emp_email'=>$request->email,
                'emp_name'=> $request->fullname,
                'emp_contact'=>$request->phonenumber,
                'emp_address'=>$request->address,
                'emp_dob'=>$request->dateofbirth,
            ]);
            $newAdmin = Admin::select()->where('emp_email',$request->email)->get();
            foreach($newAdmin as $Admin)
            {
                return $Admin;
            }
        }else{
            return 0;
        }
    }

    public function ChangePassword(request $request){
        $admin = Admin::select()->where('emp_email',$request->Email)
            ->where('emp_pwd',$request->CurrentPassword)->exists();
        if($admin){
            Admin::select()->where('emp_email',$request->Email)->where('emp_pwd',$request->CurrentPassword)
                                                                ->update(['emp_pwd'=>$request->ConfirmPassword]);
            $newAdmin = Admin::select()->where('emp_email',$request->Email)->get();
            foreach($newAdmin as $Admin)
            {
                return $Admin;
            }
        }else{
            return 0;
        }

    }
    public function AddCustomerTable(){
        $customer = DB::select("Select c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,sum(a.aution_price) as total_spending
        from customer_account c
        join aution_price a on (a.customer_id = c.customer_id)
        where aution_status = 1
        group by c.customer_id, c.customer_name,c.customer_img_name, c.customer_contact,c.customer_email, c.customer_dob, c.customer_address
        union
        Select c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,0 as total_spending
        from customer_account c
        where c.customer_id not in (select customer_id from aution_price)");
        $paginate = [];

        for($i = 1; $i <= count($customer)/10 + 1; $i++){
            $paginate[] = $i;
        }
        return $paginate;
    }
    public function PaginateCustomerTable(Request $request){
        $customers = DB::select("Select c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,sum(a.aution_price) as total_spending
        from customer_account c
        join aution_price a on (a.customer_id = c.customer_id)
        where aution_status = 1
        group by c.customer_id, c.customer_name,c.customer_img_name, c.customer_contact,c.customer_email, c.customer_dob, c.customer_address
        union
        Select c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,0 as total_spending
        from customer_account c
        where c.customer_id not in (select customer_id from aution_price)");

        $currentCustomer = [];
        $tmp = 1;
        if($request->paginate > count($customers)/10){

            $tmp = (count($customers)/10 - $request->paginate + 1) * 10;
            foreach($customers as $customer){
                $currentCustomer[] = $customer;
                if(count($currentCustomer) > $tmp){
                    break;
                }
            }
        }else{
            $tmp = $request->paginate*10;
            $getCustomer = DB::select("Select top ".$tmp." c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,sum(a.aution_price) as total_spending
            from customer_account c
            join aution_price a on (a.customer_id = c.customer_id)
            where aution_status = 1
            group by c.customer_id, c.customer_name,c.customer_img_name, c.customer_contact,c.customer_email, c.customer_dob, c.customer_address
            union
            Select top ".$tmp." c.customer_id, c.customer_name, c.customer_img_name, c.customer_contact, c.customer_email, c.customer_dob, c.customer_address ,0 as total_spending
            from customer_account c
            where c.customer_id not in (select customer_id from aution_price)");

            foreach(array_reverse($getCustomer) as $product){
                $currentCustomer[] = $product;
                if(count($currentCustomer) >= 10){
                    break;
                }
            }
        }
        return array_reverse($currentCustomer);
    }

}
