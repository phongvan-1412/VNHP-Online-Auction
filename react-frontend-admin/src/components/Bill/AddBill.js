import React from 'react'
import axios from 'axios'
import $ from "jquery";


export const AddBill = () => {
    function Create(){
        const product_id = $('#product_id').val();
        const bill_date = $('#bill_date').val();
        const bill_payment = $('#bill_payment').val();
        const customer_id = $('#customer_id').val();
        const payment_mode_id = $('#payment_mode_id').val();

        let bill_status = 0;
        if($('#bill_status').val() == "on"){
            bill_status = 1;
        }
        const bill = {
            product_id,
            bill_date,
            bill_payment,
            customer_id,
            payment_mode_id,
            bill_status
        };
        // const row = (<tr>
        //                 <td></td>
        //                 <td>{bill.product_id}</td>
        //                 <td>{bill.bill_date}</td>
        //                 <td>{bill.bill_payment}</td>
        //                 <td>{bill.customer_id}</td>
        //                 <td>{bill.payment_mode_id}</td>
        //                 <td>{bill.bill_status}</td>
        //             </tr>)
        // console.log(bill_status);
    axios.post("http://127.0.0.1:8000/api/insertbill",bill).then(function(response){
            if(response.data == 1){
                $('#msg').html("Add bill successfully").addClass("text-success").removeClass("text-danger");
            }else{
                $('#msg').html("Fail to add").addClass("text-danger").removeClass("text-success");
            }
        })
    }
  return (
    <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-1" className="control-label">Total</label>
                                    <input type="text" className="form-control" id="bill_payment" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-1" className="control-label">Cutomer</label>
                                    <input type="text" className="form-control" id="customer_id" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="product_ingredients" className="control-label">Payment</label>
                                    <input type="text" className="form-control" id="payment_mode_id" />
                                </div>
                            </div>
                            <div className="col-md-6">
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
