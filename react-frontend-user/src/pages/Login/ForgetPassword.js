import React from "react";

function ForgetPassword() {
  return (
    <div>
      <div className="col-md-12 form-group">
        <label for="exampleInputEmail1" className="text-uppercase">
          Email
        </label>
        <input type="text" className="form-control" name="email" />
      </div>
      <div className="col-md-12 form-submit">
        <button type="submit" className="btn btn-primary float-right ">
          Send mail
        </button>
      </div>
    </div>
  );
}
export default ForgetPassword;
