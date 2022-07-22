import React from "react";

function ForgetPassword() {
  return (
    <div className="row forget-password-background">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="col-md-12 form-group forget-password-form">
          <label for="exampleInputEmail1" className="text-uppercase">
            Email
          </label>
          <input type="text" className="form-control forget-password-form" name="email" />
        </div>
        <div className="col-md-12 form-submit forget-password-form">
          <button type="submit" className="btn btn-primary float-right forget-password-form">
            Send mail
          </button>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
