import React from 'react'

export const AddBill = () => {
  return (
    <div id="con-close-modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div>
                    <div className="modal-header">
                        <h4 className="modal-title">New Product</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Product</label>
                                    <input type="text" className="form-control" name="product_name" require/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Category</label>
                                    <select className="form-control" name="category_name" id="category_name">
                                        <option value="">
                                            alo
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-1" className="control-label">Price</label>
                                    <input type="text" className="form-control" name="product_price_per_unit" require/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="field-1" className="control-label">Image</label>
                                    <input type="file" className="form-control-file" name="product_img_name" require/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="product_ingredients" className="control-label">Ingredients</label>
                                    <textarea name="product_ingredients" className="form-control" id="product_ingredients" cols="30" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            <input type="submit" id="createadmin" className="btn btn-info waves-effect waves-light" value="Create"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
