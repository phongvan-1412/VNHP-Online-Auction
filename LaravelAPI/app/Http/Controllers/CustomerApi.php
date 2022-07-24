<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\DB;
 use App\Models\Customer;
class CustomerApi extends Controller
{
    public function CustomerLogin(Request $request)
    {
        $user = Customer::select()->where('customer_email', $request->customer_email)->get();
        
        return $user;
    }

    public function CustomerRegister(Request $request)
    {
        $newCustomer = new Customer();
        $newCustomer->customer_name =  $request->customer_name;
        $newCustomer->customer_email = $request->customer_email;
        $newCustomer->customer_pwd = md5($request->customer_pwd);
        $newCustomer->customer_contact = $request->customer_contact;

        $isExist = Customer::select()->where('customer_email',  $newCustomer->customer_email)->exists();

        if(!$isExist)
        {
            $newCustomer->save();
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
}
