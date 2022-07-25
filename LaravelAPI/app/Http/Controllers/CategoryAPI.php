<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Category;

class CategoryAPI extends Controller
{
    public function SelectCategories()
    {
        $categories = DB::select("select * from category");
        return $categories;
    }
    public function AddCategory(Request $request){

        $newCategory = new Category();
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
}
