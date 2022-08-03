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
        return DB::select("Select f.feedback_content, f.feedback_date, p.product_thumbnail_img_name, c.customer_img name
            from feedback f 
            join product p on (f.product_id = p.product_id)
            join customer_account c on (f.customer_id = c.customer_id)");
    }
}