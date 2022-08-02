import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

class ChangePassword extends Component{
        state = { loading: false }

        render(){
        const {currentAdminInfo, UpdateAdminLogin} = this.props
        const CheckPwd = () => {
            const password = $("#newpwd").val();
            const confirmPassword = $("#confirmpwd").val();
            if (password == confirmPassword){
                $("#alert").html("Passwords match.")
                    .addClass('text-success')
                    .removeClass('text-danger');
            }else{
                $("#alert").html("Passwords do not match!")
                .addClass('text-danger')
                .removeClass('text-success');
            }
        }
        const ChangePass = () => {
            this.setState({ loading:true })    
            const Email = $('#currentemail').val();
            const CurrentPassword = $("#currentpwd").val();
            const ConfirmPassword = $("#confirmpwd").val();
            const self=this;
            console.log(ConfirmPassword)
            if(!CurrentPassword){
                $("#alert").html("Current password is require").addClass('text-danger')
                self.setState({ loading:false })        
            }else{
                const Data = {Email, CurrentPassword, ConfirmPassword}
                axios.post("http://127.0.0.1:8000/api/changepassword", Data)
                    .then(function(response){
                        if(response.data == 0){
                            $('#result-pwd').text("Wrong current password").addClass('alert alert-danger').removeClass('alert-success');
                        }else{
                            $('#result-pwd').text("Success to change password").addClass('alert alert-success').removeClass('alert-danger');
                            localStorage.removeItem("admin_info");
                            localStorage.setItem("admin_info",JSON.stringify(response.data));
                            UpdateAdminLogin();    
                            self.setState({ loading:false })    
                        }
                    })
            }

        }
        const {loading} = this.state;
    return (
        <div className="col-xl-8" id="changepwdform" style={{display: "none"}}>
            <div className="card mb-4">
                <div className="card-header">Change Password</div>
                <div id='result-pwd'></div>
                <div className="card-body">
                <div>
                    <div className="mb-3">
                        <label className="small mb-1" htmlFor="currentpwd">
                            * Current Password
                        </label>
                        <input
                            className="form-control"
                            id="currentpwd"
                            type="password"
                            
                        />
                        <input className="form-control" defaultValue={currentAdminInfo.emp_email} id="currentemail" type="text" hidden />
                    </div>
                    <div className="mb-3">
                        <label className="small mb-1" htmlFor="newpwd">
                            * New Password
                        </label>
                        <input
                            className="form-control"
                            id="newpwd"
                            type="password"
                            onKeyUp={CheckPwd}
                        />
                    </div>
                    <div className=" mb-3">
                        <label className="small mb-1" htmlFor="confirmpwd">
                            * Confirm New Password
                        </label>
                        <input
                            className="form-control"
                            id="confirmpwd"
                            onKeyUp={CheckPwd}
                            type="password"
                        />
                        <div id="alert"></div>
                    </div>
                    <div>
                        <button
                            className="btn btn-primary"
                            id="changepwd-btn"
                            onClick={ChangePass}
                            disabled={loading}
                        >
                            { loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                            { !loading && <span>Change Password</span>}
                            { loading && <span> Loading...</span>}
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
}
export default ChangePassword