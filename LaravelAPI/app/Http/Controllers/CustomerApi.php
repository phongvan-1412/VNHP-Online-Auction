<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;
use Mail;
use Str;
use Redirect;

class CustomerApi extends Controller
{
    public function CustomerLogin(Request $request)
    {
        $user = Customer::select()->where('customer_email', $request->customer_email)->where('customer_pwd', md5($request->customer_pwd))->get();
        
        return $user;
    }

    public function CustomerRegister(Request $request)
    {
        $newCustomer = new Customer();
        $newCustomer->customer_name =  $request->customer_name;
        $newCustomer->customer_email = $request->customer_email;
        $newCustomer->customer_pwd = md5($request->customer_pwd);
        $newCustomer->customer_contact = $request->customer_contact;
        $newCustomer->customer_token = strtoupper(Str::random(10));
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
        $product_img = $request->file('user_img_name');
        $product_img_name = time().'-'.'product.'.$request->img_extension;
        $product_img->move(public_path('UserImage'), $product_img_name);

        return $product_img;
    }

    public function CustomerActivedEmail($customer_id, $customer_token){
        $tmpCustomer = Customer::select()->where('customer_id',$customer_id)->where('customer_token',$customer_token)->update(['customer_status'=>1]);
        
        if($tmpCustomer > 0)
        {
            $url = "http://localhost:3000/login";
            return Redirect::intended($url);
        }
    }
}
