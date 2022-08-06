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
        where c.category_status=1 and p.product_status=1
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

   public function SelectAllCategories()
   {
        return Category::select()->get();
   }
   

    public function AddCategoryTable(){
        $products = Category::select()->get();
        $paginate = [];

        for($i = 1; $i <= count($products)/10 + 1;$i++ )
        {
            $paginate[] = $i;
        }
        return $paginate;
    }

    public function PaginateCategoryTable(Request $request)
    {
        $products = Category::select()->get();
        $currentProducts = [];
        $tmp = 1;
        if($request->paginate > count($products)/10)
        {
            $tmp = (count($products)/10 - $request->paginate + 1) * 10;
            foreach($products as $product){
                $currentProducts[] = $product;
                if(count($currentProducts) > $tmp)
                {
                    break;
                }
            }
        }
        else
        {
            $tmp = $request->paginate*10;
            $getProduct = DB::select("select top ".$tmp." * from category order by category_id desc");
    
            foreach(array_reverse($getProduct) as $product){
                $currentProducts[] = $product;
                if(count($currentProducts) >= 10)
                {
                    break;
                }
            }
        }
        // return  response()->json(['data'=>array_reverse($currentProducts),'paginate'=>count($products)/10]);
        return array_reverse($currentProducts);
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


    public function UpdateCategory(Request $request)
    {
        $categories = Category::select()->where('category_id',$request->category_id)->get();
        $category_name = time().'-'.'category'.$request->img_extension;
        if(count($categories) > 0)
        {
            $tmp = '';
            foreach($categories as $category)
            {
                $tmp = $category;
            }
            if($request->category_name == $tmp->category_name && $request->category_img_name != "")
            {
                File::delete(public_path('CategoryImg/'.$tmp->category_img_name));
                $customer_avatar = $request->file('category_img');
                $customer_avatar->move(public_path('CategoryImg'), $category_name);
                Category::select()->where('category_id',$request->category_id)
                                    ->update(['category_img_name'=>$category_name]);
                return 1;
            }
            else if($request->category_img_name == "" && $request->category_name != $tmp->category_nam)
            {
                Category::select()->where('category_id',$request->category_id)
                                    ->update(['category_name'=>$request->category_name]);
                return 1;
            }
            else
            {
                File::delete(public_path('CategoryImg/'.$tmp->category_img_name));
                $customer_avatar = $request->file('category_img');
                $customer_avatar->move(public_path('CategoryImg'), $category_name);
                Category::select()->where('category_id',$request->category_id)
                                    ->update(['category_img_name'=>$category_name,
                                                'category_name'=>$request->category_name]);
                return 1;
            }
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
}
