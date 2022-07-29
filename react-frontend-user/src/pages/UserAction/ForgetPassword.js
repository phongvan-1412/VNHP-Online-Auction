import React from "react";
import $ from "jquery";
import axios from "axios";

function ForgetPassword() {
  const checkEmail = () => {
    const customer_email = $("#customer-email").val();
    const result = $("#check-customer-email-result");
    axios
      .post(`http://127.0.0.1:8000/api/isemailexists`, { customer_email })
      .then(function (response) {
        if (response.data == 0) {
          result.text("Email " + customer_email + " is not exists.");
          result.css("color", "red");
          $("#btn-reset-password").prop("disabled", true);
        } else {
          result.text("Email " + customer_email + " is exists.");
          result.css("color", "green");
          $("#btn-reset-password").prop("disabled", false);
        }
      });
  };

  const resetButtonPasswordClick = () => {
    const customer_email = $("#customer-email").val();
    const result = $("#check-customer-email-result");

    if (!customer_email) {
      result.text("Please enter your email");
      result.css("color", "red");
      return;
    }

    axios
      .post(`http://127.0.0.1:8000/api/customerforgetpassword`, { customer_email })
      .then(function (response) {
        if (response.data == 0) {
          result.text("Something wrong in server.");
          result.css("color", "red");
        } else {
          result.text(
            "Reset password successfully. Please check your email to have new password"
          );
          result.css("color", "green");
        }
      });
  };

  return (
    <div
      className="row forget-password-wrapper"
      style={{ margin: "0px", padding: "0px" }}
    >
      <img
        className="forget-password-background"
        src={require("../../img/About/about2.jpg")}
        style={{ margin: "0px", padding: "0px" }}
      />
      <div className="card col-md-6 forget-password-form-wrapper">
        <div className="col-md-12 form-group forget-password-form">
          <label
            htmlFor="exampleInputEmail1"
            className="text-uppercase text-center"
          >
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            id="customer-email"
            onBlur={checkEmail}
          />
          <div id="check-customer-email-result"></div>
        </div>
        <div className="col-md-12 form-submit forget-password-form">
          <button
            type="submit"
            className="btn btn-white float-right forget-password-form"
            id="btn-reset-password"
            data-dismiss=""
            onClick={resetButtonPasswordClick}
          >
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
