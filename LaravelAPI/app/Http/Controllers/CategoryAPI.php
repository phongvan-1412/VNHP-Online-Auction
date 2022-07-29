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
        $newCategory->category_name =  $request->category_name;
        $category_img = $request->file('category_img');
        $newCategory->category_img_name = time().'-'.'category'. $request->img_extension;

        $isExist = Category::select()->where('category_name',  $request->category_name)->exists();

        if(!$isExist)
        {
            $newCategory->save();
            $category_img->move(public_path('CategoryImg'),  time().'-'.'category'.$request->img_extension);
            return 1;
        }
       
        return 0;         
    }
    // table add category
    public function AddCategoryTable(){

    }

}
