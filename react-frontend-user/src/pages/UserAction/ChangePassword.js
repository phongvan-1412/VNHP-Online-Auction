import React from "react";
import $ from "jquery";
import axios from "axios";

function ChangePassword({ currentUserInfo, updateUserLogin }) {
  let checkValidNewPassword = false;
  let checkValidConfirmPassword = false;
  let checkValidOldPassword = false;

  const onCheckPassword = () => {
    const customer_email = $("#customer-email").val();
    const customer_pwd = $("#customer-old-password").val();
    const result = $("#customer-old-password-result");

    if (!customer_pwd) {
      result.text("Please enter your old password.");
      result.css("color", "red");
      return;
    }

    const customer = {
      customer_email,
      customer_pwd,
    };

    axios
      .post(`http://127.0.0.1:8000/api/customercheckpassword`, customer)
      .then(function (response) {
        if (response.data == 1) {
          if (customer_pwd === $("#customer-new-password").val()) {
            $("#customer-new-password-result").text(
              "You enter same old password. Please try another password."
            );
            $("#customer-new-password-result").css("color", "red");
          }
          result.text("Password is valid.");
          result.css("color", "green");
          checkValidOldPassword = true;
          buttonChangePasswordSetter();
        } else {
          result.text("Please check your password.");
          result.css("color", "red");
        }
      });
  };

  const isValidNewPassword = (password) => {
    var validPassword = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

    if (password.length < 6 || validPassword.test(password)) return false;
    return true;
  };

  const onNewPasswordBlur = () => {
    const result = $("#customer-new-password-result");
    const password = $("#customer-new-password").val();
    result.text("");

    if (!password) {
      result.text("Please enter your new password.");
      result.css("color", "red");
    } else {
      if (password === $("#customer-old-password").val()) {
        result.text(
          "You enter same old password. Please try another password."
        );
        result.css("color", "red");
      } else if (isValidNewPassword(password)) {
        result.text("Password is valid.");
        result.css("color", "green");
        checkValidNewPassword = true;
        onNewConfirmPasswordBlur();
      } else {
        result.text(
          "Password is too short. Please enter more than 6 character"
        );
        result.css("color", "red");
      }
    }
    buttonChangePasswordSetter();
  };

  const isValidNewConfirmPassword = (password) => {
    if (password === $("#customer-new-password").val()) return true;
    return false;
  };

  const onNewConfirmPasswordBlur = () => {
    const result = $("#customer-confirm-new-password-result");
    const password = $("#customer-confirm-new-password").val();
    result.text("");
    if (!password) {
      result.text("Please enter your confirm password.");
      result.css("color", "red");
    } else {
      if (isValidNewConfirmPassword(password)) {
        result.text("Confirm password is valid.");
        result.css("color", "green");
        checkValidConfirmPassword = true;
      } else {
        result.text("Please enter same new password.");
        result.css("color", "red");
      }
    }
    buttonChangePasswordSetter();
  };

  const buttonChangePasswordSetter = () => {
    if (
      checkValidNewPassword &&
      checkValidConfirmPassword &&
      checkValidOldPassword
    ) {
      $("#btn-register").removeAttr("disabled");
    } else {
      $("#btn-register").prop("disabled", true);
    }
  };

  const onButtonChangePasswordClick = () => {
    const customer_email = $("#customer-email").val();
    const customer_pwd = $("#customer-old-password").val();
    const new_password = $("#customer-new-password").val();
    const confirm_new_password = $("#customer-confirm-new-password").val();

    if (
      !customer_pwd == true ||
      !customer_pwd == true ||
      !new_password == true ||
      !confirm_new_password == true
    ) {
      $("#customer-old-password-result").text(
        "Please enter your old password."
      );
      $("#customer-old-password-result").css("color", "red");

      $("#customer-new-password-result").text(
        "Please enter your new password."
      );
      $("#customer-new-password-result").css("color", "red");

      $("#customer-confirm-new-password-result").text(
        "Please enter your confirm new password"
      );
      $("#customer-confirm-new-password-result").css("color", "red");

      return;
    }

    const customer = {
      customer_email,
      customer_pwd,
      new_password,
    };

    axios
      .post(`http://127.0.0.1:8000/api/customerchangepassword`, customer)
      .then(function (response) {
        if (response.data == 0) {
          $("#btn-change-password").data("dismiss", "");
          alert("Something wrong in server");
        } else {
          localStorage.removeItem("customer_info");
          localStorage.setItem("customer_info", JSON.stringify(response.data));
          updateUserLogin();
          $("#change-password-result").text(
            "Change password successfully.Please relog to update your password"
          );
          $("#change-password-result").css("color", "green");

          $("#customer-old-password").val("");
          $("#customer-old-password-result").text("");
          $("#customer-new-password").val("");
          $("#customer-new-password-result").text("");
          $("#customer-confirm-new-password").val("");
          $("#customer-confirm-new-password-result").text("");
          // window.location.href = "http://localhost:3000/userprofile";
        }
      });
  };

  const onSuccsess = () => {
    $("#btn-change-password").data("bs-dismiss", "modal");
  };

  return (
    <div
      className="modal fade "
      id="changepassword"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content bg-dark change-password-body">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              <b id="title">CHANGE PASSWORD</b>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="change-password-result"></div>

          <div className="modal-body change-password-form-group">
            <div className="row">
              <input
                hidden
                defaultValue={currentUserInfo.customer_email}
                id="customer-email"
              />
              <div className="col-md-12 change-password-form">
                <label
                  htmlFor="exampleInputEmail1"
                  className=" text-center change-password-form"
                >
                  <b id="title">OLD PASSWORD</b>
                </label>
                <input
                  type="text"
                  className="form-control change-password-input change-password-form"
                  id="customer-old-password"
                  placeholder="Your old password"
                  onBlur={onCheckPassword}
                />
                <div id="customer-old-password-result"></div>
              </div>

              <div className="col-md-12 change-password-form">
                <label
                  htmlFor="exampleInputEmail1"
                  className=" text-center change-password-form"
                >
                  <b id="title">NEW PASSWORD</b>
                </label>
                <input
                  type="text"
                  className="form-control change-password-form"
                  id="customer-new-password"
                  placeholder="Your new password"
                  onBlur={onNewPasswordBlur}
                />
                <div id="customer-new-password-result"></div>
              </div>

              <div className="col-md-12 change-password-form">
                <label
                  htmlFor="exampleInputEmail1"
                  className=" text-center change-password-form"
                >
                  <b id="title">CONFIRM NEW PASSWORD</b>
                </label>
                <input
                  type="text"
                  className="form-control change-password-form"
                  id="customer-confirm-new-password"
                  placeholder="Your confirm new password"
                  onBlur={onNewConfirmPasswordBlur}
                />
                <div id="customer-confirm-new-password-result"></div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn change-password-form"
              id="btn-change-password-close"
              data-bs-dismiss="modal"
            >
              <b>CLOSE</b>
            </button>
            <button
              type="submit"
              className="btn float-right change-password-form"
              id="btn-change-password"
              data-bs-dismiss=""
              onClick={onButtonChangePasswordClick}
            >
              <b>SAVE CHANGE</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
