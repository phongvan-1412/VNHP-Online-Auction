import {React, Component} from "react";
import  ChangePassword  from "./ChangePassword";
import $ from "jquery"
import "../../css/profile.css"

class AdminProfile extends Component{
    render(){ 
        const {admininfo} = this.props;
        let currentAdminInfo = admininfo;
        if (performance.navigation.type === 1) {
          if (localStorage.getItem("admin_info") == null) {
            window.location.href = "http://localhost:3000/login";
          } else {
            currentAdminInfo = JSON.parse(localStorage.getItem("admin_info"));
          }
        }
        var check = true;
        const ChangePwd = () =>{
            if(check){
                $('#account-detail').hide(100);
                $('#changepwdform').show(200);
                $('#changepwd').html("Change Profile");
                check = false;
            }else{
                $('#changepwdform').hide(200);
                $('#account-detail').show(100);
                $('#changepwd').html("Change Password");
                check = true;
            }
        }    
        return (
            <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                    <div className="card mb-2 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                        <img
                            className="img-account-profile rounded-circle mb-2"
                            src={require(`../../../../LaravelAPI/public/AdminImage/${currentAdminInfo.emp_img_name}`)}
                        />
                        <input type="file" name="avatar" />
                        <div className="card mt-3">
                            <span 
                                className="btn btn-primary"  
                                id="changepwd"
                                onClick={ChangePwd}
                            >
                            Change Password
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-8" id="account-detail">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="position">
                            Rank
                            </label>
                            <input
                            className="form-control"
                            name="position"
                            id="position"
                            type="text"
                            value="Admin"
                            disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="fullname">
                            Full name
                            </label>
                            <input
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            type="text"
                            value={admininfo.emp_name}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="address">
                            Address
                            </label>
                            <input
                                className="form-control"
                                id="address"
                                name="address"
                                type="text"
                                value={admininfo.emp_address}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="email">
                            Email address
                            </label>
                            <input 
                                className="form-control" 
                                id="email"
                                value={admininfo.emp_email}
                                disabled 
                            />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="phonenumber">
                                Phone number
                            </label>
                            <input
                                className="form-control"
                                id="phonenumber"
                                name="phonenumber"
                                type="tel"
                                value={admininfo.emp_contact}
                            />
                            </div>
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="dateofbirth">
                                Birthday
                            </label>
                            <input
                                className="form-control"
                                id="dateofbirth"
                                type="date"
                                name="dateofbirth"
                                placeholder="Enter your birthday"
                                value={admininfo.emp_dob}
                            />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Save changes
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* CHANGE PASSWORD FORM */}
                    <ChangePassword />
                </div>
            </div>
        );
    }
}

export default AdminProfile;
