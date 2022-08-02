<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Category;
use File;
class CategoryAPI extends Controller
{
    public function SelectCategories()
    {
        $categories = DB::select("select count(p.product_id) as product_quantity, c.category_id, c.category_name, c.category_status, c.category_img_name 
        from category c 
        join product p on (c.category_id = p.category_id) 
        where c.category_status=1 
        group by c.category_id,c.category_name, c.category_status, c.category_img_name 
        order by c.category_name");
        return $categories;
    }
    public function AddCategory(Request $request){
        $newCategory = new Category();
        $newCategory->category_name =  $request->category_name;
        $category_img = $request->file('category_img');
        $newCategory->category_img_name = time().'-'.'category'.$request->img_extension;

        $isExist = Category::select()->where('category_name', $request->category_name)->exists();

        if(!$isExist)
        {
            $newCategory->save();
            $category_img->move(public_path('CategoryImg'), $newCategory->category_img_name);
            return 1;
        }
       
        return 0;  
    }

    // table add category
    public function AddCategoryTable(){
        $getcategory = Category::select()->get();
        return $getcategory;

    }

    public function CheckExistsCategory(Request $request)
    {
        $categories = Category::select()->where('category_name',$request->category_name)->get();

        if(count($categories) > 0)
        {
            return 1;
        }
        return 0;
    }

    public function UpdateCategoryStatus(Request $request){
        $categories = Category::select()->where('category_name',$request->category_name)->get();

        $tmp = new Category();
        foreach($categories as $category)
        {
            $tmp = $category;
        }

        if(count($categories) > 0)
        {
            Category::where('category_name', $request->category_name)->update(['category_status'=>$request->category_status]);
            return 1;
        }
        return 0;
    }

    public function UpdateCategory(Request $request)
    {

        $categories = Category::select()->where('category_name',$request->category_name)->get();

        $tmp = '';
        foreach($categories as $category){
            $tmp = $category;
        }
        
        if(count($categories) > 0){
            File::delete(public_path('CategoryImg/'.$tmp->category_img_name));

            $category_img = $request->file('category_img');
            $category_img_name = time().'-'.'category'.$request->img_extension;
            $category_img->move(public_path('CategoryImg'),  $category_img_name);
            Category::where('category_name', $request->category_name)->update(['category_img_name'=> $category_img_name]);
            
            return $category_img_name;
        }
        return 0;
    }
    
}
