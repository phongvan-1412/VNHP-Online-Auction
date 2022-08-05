import React from 'react'
import axios from 'axios'
import $ from "jquery";


export const AddBill = () => {
    function Create(){
        const aution_id = $('#aution_id').val();
        const bill_date = $('#bill_date').val();
        const customer_id = $('#customer_id').val();
        const payment_mode_id = $('#payment_mode_id').val();

        let bill_status = 0;
        if($('#bill_status').val() == "on"){
            bill_status = 1;
        }
        const bill = {
            aution_id,
            bill_date,
            customer_id,
            payment_mode_id,
            bill_status
        };
    axios.post("http://127.0.0.1:8000/api/insertbill",bill).then(function(response){
            if(response.data == 1){
                $('#msg').html("Add bill successfully").addClass("text-success").removeClass("text-danger");
            }else{
                $('#msg').html("Fail to add").addClass("text-danger").removeClass("text-success");
            }
        })
    }
  return (
    <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div>
                    <div className="modal-header">
                        <h4 className="modal-title">Add bill</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Product</label>
                                    <input type="text" className="form-control" id="product_id" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Date</label>
                                    <input type="date" className="form-control" id="bill_date" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label className="control-label" htmlFor="id">Aution id </label>
                                <input type="text" className="form-control" id="aution_id"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="product_ingredients" className="control-label">Status</label>
                                    <input type="checkbox" className="form-control" id="bill_status" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div id="msg"></div>
                            <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            <input type="submit" className="btn btn-info waves-effect waves-light"  onClick={Create} value="Create"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
