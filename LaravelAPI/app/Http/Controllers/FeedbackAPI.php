<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Feedback;
use Illuminate\Support\Facades\DB;
class FeedbackAPI extends Controller
{
    //Add Comment
    public function AddComment(Request $request){
        $newFeedback = new Feedback();
        $newFeedback->product_id =  $request->product_id;
        $newFeedback->customer_id =  $request->customer_id;
        $newFeedback->feedback_content =  $request->feedback_content;
        $newFeedback->feedback_date =  $request->feedback_date;

        $newFeedback->save();

        return Feedback::select()->where('feedback_content', $request->feedback_content)
        ->where('product_id', $request->product_id)
        ->where('customer_id', $request->customer_id)
        ->where('feedback_date', $request->feedback_date)
        ->get();
    }

    public function AddFeedback(Request $request){
        $newFeedback = new Feedback();
        $newFeedback->customer_id =  $request->customer_id;
        $newFeedback->feedback_content =  $request->feedback_content;
        $newFeedback->feedback_date =  $request->feedback_date;

        $newFeedback->save();

        return Feedback::select()->where('feedback_content', $request->feedback_content)
        ->where('customer_id', $request->customer_id)
        ->where('feedback_date', $request->feedback_date)
        ->get();
    }

    //Show Comment
    public function ShowComment(){
        $feedbacks = DB::select("select f.product_id, ca.customer_img_name, ca.customer_name, f.feedback_date, f.feedback_content from customer_account ca join feedback f
        on (ca.customer_id = f.customer_id)
        where f.feedback_status=1
        group by ca.customer_img_name, ca.customer_name, f.feedback_date, f.feedback_content, f.product_id
        order by f.product_id, f.feedback_date");

    return $feedbacks;
    }
    public function ShowFeedback(){
        return DB::table('product as p')
        ->join('feedback as f','f.product_id','=','p.product_id')
        ->join('customer_account as c','c.customer_id','=','f.customer_id')
        ->whereNotNull('f.feedback_content')->get();
    }
    public function ProductHasFeedback(){
        return DB::select("select c.category_name,p.product_id,p.product_name, p.product_thumbnail_img_name,count(f.product_id) as amount 
        from product as p
        join feedback as f on f.product_id = p.product_id 
        join category as c on c.category_id = p.category_id
        where f.feedback_content is not null 
        group by c.category_name, p.product_id, p.product_name, p.product_thumbnail_img_name");
    }
}
