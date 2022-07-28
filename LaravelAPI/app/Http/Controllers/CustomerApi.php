<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;
use Mail;
use Str;
use Redirect;
use File;
class CustomerApi extends Controller
{
    public function CustomerLogin(Request $request)
    {
        $users = Customer::select()->where('customer_email', $request->customer_email)->where('customer_pwd', md5($request->customer_pwd))->get();
        $tmpUser = new Customer();
        
        foreach($users as $user)
        {
            $tmpUser = $user;
        }

        if($tmpUser->customer_status < 1){
             return 2;
        }
        else{
            Customer::select()->where('customer_email', $request->customer_email)->where('customer_pwd', md5($request->customer_pwd))->update(['customer_login_status'=>1]);
            return $tmpUser;
        }

        return 0;
    }

    public function CustomerLogOut(Request $request)
    {
        $user = Customer::select()->where('customer_id', $request->customer_id)->get();
        
        if(count($user) > 0)
        {
            Customer::select()->where('customer_id', $request->customer_id)->update(['customer_login_status'=>0]);
            return 1;
        }
        return 0;
    }
    

    public function CustomerRegister(Request $request)
    {
        $newCustomer = new Customer();
        $newCustomer->customer_name =  $request->customer_name;
        $newCustomer->customer_email = $request->customer_email;
        $newCustomer->customer_pwd = md5($request->customer_pwd);
        $newCustomer->customer_contact = $request->customer_contact;
        $newCustomer->customer_token = strtoupper(Str::random(10));
        // $newCustomer->customer_ip = $request->customer_ip;

        $isExist = Customer::select()->where('customer_email',  $newCustomer->customer_email)->exists();

        if(!$isExist)
        {
            $newCustomer->save();
            Mail::send('emailValidateEmail', compact('newCustomer'), function($email) use($newCustomer){
                $email->subject('VNHP Aution - Verify account');
                $email->to($newCustomer->customer_email, $newCustomer->customer_name);
            });
            return 1;
        }
       
        return 0;
    }

    public function IsEmailExists(Request $request)
    {
        $isExist = Customer::where('customer_email', $request->customer_email)->exists();
       
        if($isExist)
            return 1;
        return 0;
    }

    public function CustomerUpdateInfo(Request $request)
    {
        $customer = Customer::select()->where('customer_email',$request->customer_email)->get();

        if(count($customer) > 0)
        {
            Customer::select()->where('customer_email',$request->customer_email)
                                            ->update(['customer_name'=>$request->customer_name,
                                                    'customer_address'=>$request->customer_address,
                                                    'customer_contact'=>$request->customer_contact,
                                                    'customer_dob'=>$request->customer_dob,
                                                    'customer_img_name'=>$request->customer_img_name]);
            $tmpCustomer = Customer::select()->where('customer_email',$request->customer_email)->get();

            $tmp = new Customer();
            foreach($tmpCustomer as $cus)
            {
                $tmp = $cus;
            }
            return $tmp;
        }

        return 0;
    }

    public function CustomerActivedEmail($customer_id, $customer_token){
        $tmpCustomer = Customer::select()->where('customer_id',$customer_id)->where('customer_token',$customer_token)->update(['customer_status'=>1]);
        
        if($tmpCustomer > 0)
        {
            $url = "http://localhost:3000/login";
            return Redirect::intended($url);
        }
    }

    public function CustomerInfo()
    {
        return Customer::select()->get();
    }

    public function CustomerChangeAvatar(Request $request)
    {
        $customer = Customer::select()->where('customer_email',$request->customer_email)->get();
        $tmp = new Customer();

        if(count($customer) > 0)
        {
            foreach($customer as $cus)
            {
                $tmp = $cus;
            }
            if($tmp->customer_img_name != 'default_account_image.jpg')
            {
                File::delete(public_path('UserImage/'.$tmp->customer_img_name));
            }

            Customer::select()->where('customer_email',$request->customer_email)
                                            ->update(['customer_name'=>$request->customer_name,
                                            'customer_address'=>$request->customer_address,
                                            'customer_contact'=>$request->customer_contact,
                                            'customer_dob'=>$request->customer_dob,
                                            'customer_img_name'=>time().'-'.'user'.$request->img_extension]);
            $customer_avatar = $request->file('user_avatar_image');
            $customer_avatar->move(public_path('UserImage'), time().'-'.'user'.$request->img_extension);
            $tmpCustomer = Customer::select()->where('customer_email',$request->customer_email)->get();

            foreach($tmpCustomer as $cus)
            {
                $tmp = $cus;
            }
            return $tmp;
        }

        return 0;
    }
    
}
