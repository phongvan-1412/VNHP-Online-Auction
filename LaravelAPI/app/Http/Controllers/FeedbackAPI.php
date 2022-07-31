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
        return $request;
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

}