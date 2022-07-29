import React from 'react'
import $ from 'jquery'

function ChangePassword() {
    const checkpwd = () => {
        var password = $("#newpwd").val();
        var confirmPassword = $("#confirmpwd").val();
        if (password == confirmPassword){
            $("#alert").html("Passwords match.")
                .addClass('text-success')
                .removeClass('text-danger');
            $("#changepwd-btn")
                .prop('disabled', false); 
        }else{
            $("#alert").html("Passwords do not match!")
                .addClass('text-danger')
                .removeClass('text-success');
        }
    }
  return (
    <div className="col-xl-8" id="changepwdform" style={{display: "none"}}>
        <div className="card mb-4">
            <div className="card-header">Change Password</div>
            <div className="card-body">
            <div>
                <div className="mb-3">
                    <label className="small mb-1" for="currentpwd">
                        Current Password
                    </label>
                    <input
                        className="form-control"
                        id="currentpwd"
                        name="currentpwd"
                        type="password"
                    />
                </div>
                <div className="mb-3">
                    <label className="small mb-1" for="newpwd">
                        New Password
                    </label>
                    <input
                        className="form-control"
                        id="newpwd"
                        name="newpwd"
                        type="password"
                        onKeyUp={checkpwd}
                    />
                </div>
                <div className=" mb-3">
                    <label className="small mb-1" labelFor="confirmpwd">
                        Confirm New Password
                    </label>
                    <input
                        className="form-control"
                        id="confirmpwd"
                        name="confirmpwd"
                        onKeyUp={checkpwd}
                        type="password"
                    />
                    <div id="alert"></div>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        id="changepwd-btn"
                        type="submit"
                        disabled
                    >
                        Change Password
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default ChangePassword