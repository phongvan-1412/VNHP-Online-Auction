<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Category;

class CategoryAPI extends Controller
{
    public function SelectCategoryRoot()
    {
        $tmp_categories = DB::select("select * from category");
        $categories = self::AddCollection($tmp_categories);
        return $categories;
    }

    public function SelectCategories()
    {
        $tmp_categories= DB::select("exec sp_select_all_category");
        $categories = self::AddCollection($tmp_categories);
        return $categories;;
    }

    public function AddCollection($arr)
    {
        $collection = collect();

        foreach($arr as $category)
        {
            $newCategory = new Category();
            $newCategory = $category;
            $collection->add($newCategory);
            }

        return $collection;
    }
}