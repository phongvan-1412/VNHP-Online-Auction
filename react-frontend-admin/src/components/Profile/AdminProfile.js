import {React, Component} from "react";
import  ChangePassword  from "./ChangePassword";
import $ from "jquery"
import "../../css/profile.css"

class AdminProfile extends Component{
    render(){ 
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
                            src=""
                        />
                        <div className="small font-italic text-muted mb-4">
                            JPG or PNG no larger than 5 MB
                        </div>
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
                            <label className="small mb-1" for="position">
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

                        <div className="mb-3" hidden>
                            <label className="small mb-1" for="email">
                            Hidden Email
                            </label>
                            <input
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            value=""
                            />
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" for="fullname">
                            Full name
                            </label>
                            <input
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Enter your fullname"
                            value=""
                            />
                        </div>

                        <div className="mb-3">
                            <label className="small mb-1" for="address">
                            Address
                            </label>
                            <input
                            className="form-control"
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Enter your address"
                            value=""
                            />
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" for="email">
                            Email address
                            </label>
                            <input className="form-control" id="email" value="" disabled />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                            <label className="small mb-1" for="phonenumber">
                                Phone number
                            </label>
                            <input
                                className="form-control"
                                id="phonenumber"
                                name="phonenumber"
                                type="tel"
                                value=""
                            />
                            </div>
                            <div className="col-md-6">
                            <label className="small mb-1" for="dateofbirth">
                                Birthday
                            </label>
                            <input
                                className="form-control"
                                id="dateofbirth"
                                type="date"
                                name="dateofbirth"
                                placeholder="Enter your birthday"
                                value=""
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
