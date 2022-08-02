import {React, Component} from "react";
import  ChangePassword  from "./ChangePassword";
import $ from "jquery";
import "../../css/profile.css";
import axios from 'axios';

class AdminProfile extends Component{
    state = { loading: false }

    render(){ 
        const {admininfo, UpdateAdminLogin} = this.props;
        let currentAdminInfo = admininfo;
        if (performance.navigation.type === 1) {
          if (localStorage.getItem("admin_info") == null) {
            window.location.href = "http://localhost:3001/login";
          } else {
            currentAdminInfo = JSON.parse(localStorage.getItem("admin_info"));
          }
        }
        var check = true;
        const ShowChangePwd = () =>{
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
        

        function onAvatarChange() {
            let avatar = $("#avatar").prop("files")[0];
            let reader = new FileReader();
            reader.readAsDataURL(avatar);
      
            reader.onloadend = function() {
                $("#avatar-img").prop("src", reader.result);
            }
            const avatar_name = avatar.name;
            const index = avatar_name.indexOf(".");
            const img_extension = avatar_name.substr(index, index + 4);
            const email = $('#email').val();

            let formData = new FormData();
            formData.set("emp_email", email);
            formData.set("avatar", avatar);
            formData.set("extension", img_extension);
            axios
                .post("http://127.0.0.1:8000/api/changeavatar", formData)
                .then(function(response){
                    if(response.data == 0){
                        $('#result-img').text("Fail to change avatar").addClass('alert alert-danger')
                    }else{
                        localStorage.removeItem("admin_info");
                        localStorage.setItem("admin_info",JSON.stringify(response.data));
                        UpdateAdminLogin();
                        window.location.reload()
                    }
                })
            
        }

        const ChangeProfile = () => {
            this.setState({ loading:true })    
            const email = $('#email').val();
            const fullname = $('#fullname').val();
            const address = $('#address').val();
            const phonenumber = $('#phonenumber').val();
            const dateofbirth = $('#dateofbirth').val();
            const Data = {email, fullname, address, phonenumber, dateofbirth}
            axios
                .post("http://127.0.0.1:8000/api/changeprofile", Data)
                .then(function(response){
                    if(response.data == 0){
                        $('#result-profile').text("Fail to change profile").addClass('alert alert-danger');
                    }else{
                        $('#result-profile').text("Success to change profile").addClass('alert alert-success');
                        localStorage.removeItem("admin_info");
                        localStorage.setItem("admin_info",JSON.stringify(response.data));
                        UpdateAdminLogin();           
                        this.setState({ loading: false })
                    }
                })
        }
            
        const {loading} = this.state;

        return (
            <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                    <div className="card mb-2 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div id="result-img"></div>
                        <div className="card-body text-center">
                        <img
                            className="img-account-profile rounded-circle mb-2"
                            id="avatar-img"
                            src={require(`../../../../LaravelAPI/public/AdminImage/${currentAdminInfo.emp_img_name}`)}
                            alt="avatar"
                        />
                        <input 
                            type="file"
                            name="avatar" 
                            id="avatar"
                            onChange={onAvatarChange}                        
                        />
                        <div className="card mt-3">
                            <span 
                                className="btn btn-primary"  
                                id="changepwd"
                                onClick={ShowChangePwd}
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
                        <div id="result-profile"></div>
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
                            defaultValue="Admin"
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
                            defaultValue={currentAdminInfo.emp_name}
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
                                defaultValue={currentAdminInfo.emp_address}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="email">
                            Email address
                            </label>
                            <input 
                                className="form-control" 
                                id="email"
                                defaultValue={currentAdminInfo.emp_email}
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
                                defaultValue={currentAdminInfo.emp_contact}
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
                                defaultValue={currentAdminInfo.emp_dob}
                            />
                            </div>
                        </div>
                        <button  className="btn btn-primary" onClick={ChangeProfile} disabled={loading} type="submit">
                            { loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                            { !loading && <span>Save Change</span>}
                            { loading && <span> Loading...</span>}
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* CHANGE PASSWORD FORM */}
                    <ChangePassword currentAdminInfo={currentAdminInfo} UpdateAdminLogin={UpdateAdminLogin}/>
                </div>
            </div>
        );
    }
}

export default AdminProfile;
