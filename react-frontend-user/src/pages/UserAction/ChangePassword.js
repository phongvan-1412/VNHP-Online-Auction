import React from "react";

function ChangePassword() {
  return (
    <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div>
                    <div className="modal-header">
                        <h4 className="modal-title">Change Password </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body p-4">
                     
                    </div>
                    <div className="modal-footer">
                        <div id="msg"></div>
                        <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <input type="submit" className="btn btn-info waves-effect waves-light" value="Create"/>
                    </div>
                </div>
            </div>
        </div>
    </div>        
  );
}
export default ChangePassword;
