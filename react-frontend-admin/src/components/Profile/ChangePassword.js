import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

function ChangePassword({currentAdminInfo, UpdateAdminLogin}){
  
        // let currentAdminInfo = admininfo;
        // if (performance.navigation.type === 1) {
        //   if (localStorage.getItem("admin_info") == null) {
        //     window.location.href = "http://localhost:3001/login";
        //   } else {
        //     currentAdminInfo = JSON.parse(localStorage.getItem("admin_info"));
        //   }
        // }

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
            const Email = $('#currentemail').val();
            const CurrentPassword = $("#currentpwd").val();
            const ConfirmPassword = $("#confirmpwd").val();
            if(!CurrentPassword){
                $("#alert").html("Current password is require").addClass('text-danger')
            }else{
                const Data = {Email, CurrentPassword, ConfirmPassword}
                axios.post("http://127.0.0.1:8000/api/changepassword", Data)
                    .then(function(response){
                        if(response.data == 0){
                            $('#result-pwd').text("Wrong current password").addClass('alert alert-danger').removeClass('alert-success');
                            $("#newpwd").text("");
                            $("#currentpwd").text("");
                            $("#confirmpwd").text("");
                        }else{
                            $('#result-pwd').text("Success to change password").addClass('alert alert-success').removeClass('alert-danger');
                            localStorage.removeItem("admin_info");
                            localStorage.setItem("admin_info",JSON.stringify(response.data));
                            UpdateAdminLogin();    
                        }
                    })
            }

        }
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