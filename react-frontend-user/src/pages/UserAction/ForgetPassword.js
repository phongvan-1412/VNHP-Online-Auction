import React from "react";
import $ from "jquery";
function ForgetPassword() {
  return (
    <div className="row forget-password-wrapper"  style={{margin: "0px", padding:"0px"}}>
      <img className="forget-password-background" src={require('../../img/About/about2.jpg')} style={{margin: "0px", padding:"0px"}}/>
        <div className="card col-md-6 forget-password-form-wrapper">
          <div className="col-md-12 form-group forget-password-form">
            <label htmlFor="exampleInputEmail1" className="text-uppercase text-center" >
              Email
            </label>
            <input type="text" className="form-control" name="email" placeholder="Your Email"/>
          </div>
          <div className="col-md-12 form-submit forget-password-form">
            <button type="submit" className="btn btn-white float-right forget-password-form">
              Send mail
            </button>
          </div>
      </div>   
    </div>
  );
}
export default ForgetPassword;
