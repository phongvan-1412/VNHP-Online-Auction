import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Register() {
  function isValidName(name) {
    var validNamePattern = /^[A-Za-z\s]+$/;
    return !validNamePattern.test(name.trim());
  }
  const onNameBlur = (e) => {
    const $result = $("#" + e.target.name + "Result");
    const name = $("#" + e.target.name).val();
    $result.text("");

    if (!name) {
      $result.text("Please enter your name");
      $result.css("color", "red");
    } else {
      if (name.length < 4) {
        $result.text(
          e.target.name.charAt(0).toUpperCase() +
            e.target.name.slice(1) +
            " too short."
        );
        $result.css("color", "red");
      } else if (isValidName(name)) {
        $result.text(name + " is not valid.");
        $result.css("color", "red");
      } else {
        $result.text(name + " is valid.");
        $result.css("color", "green");
      }
    }
    buttonRegisterSetter();
  };

  const isValidEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateEmail = () => {
    const $result = $("#emailResult");
    const email = $("#email").val();
    $result.text("");

    if (!email) {
      $result.text("*Please enter your email");
      $result.css("color", "red");
    } else {
      if (isValidEmail(email)) {
        $result.text(email + " is valid.");
        $result.css("color", "green");
      } else {
        $result.text(email + " is not valid.");
        $result.css("color", "red");
      }
    }
    buttonRegisterSetter();
  };

  const onEmailBlur = () => {
    validateEmail();
  };

  const isValidPassword = (password) => {
    var validPassword = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

    if (password.length < 6 || validPassword.test(password)) return false;
    return true;
  };

  const onPasswordBlur = () => {
    const $result = $("#passwordResult");
    const password = $("#password").val();
    $result.text("");

    if (!password) {
      $result.text("Please enter your password.");
      $result.css("color", "red");
    } else {
      if (isValidPassword(password)) {
        $result.text("Password is valid.");
        $result.css("color", "green");
      } else {
        $result.text("Password is not valid.");
        $result.css("color", "red");
      }
    }
    buttonRegisterSetter();
  };

  const isValidConfirmPassword = (password) => {
    if (password === $("#password").val()) return true;
    return false;
  };

  const onConfirmPasswordBlur = () => {
    const $result = $("#confirmPasswordResult");
    const password = $("#confirmpassword").val();
    $result.text("");
    if (!password) {
      $result.text("Please enter your confirm password.");
      $result.css("color", "red");
    } else {
      if (isValidConfirmPassword(password)) {
        $result.text("Password is valid.");
        $result.css("color", "green");
      } else {
        $result.text("Password is not valid.");
        $result.css("color", "red");
      }
    }
    buttonRegisterSetter();
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;

    if (!phoneNumber.match(regexPhoneNumber)) {
      return false;
    }
    return true;
  };

  const onPhoneNumberBlur = () => {
    const $result = $("#phonenumberResult");
    const phoneNumber = $("#phonenumber").val();
    $result.text("");
    if (!phoneNumber) {
      $result.text("Please enter your confirm password.");
      $result.css("color", "red");
    } else {
      if (isValidPhoneNumber(phoneNumber)) {
        $result.text("Phone Number is valid.");
        $result.css("color", "green");
      } else {
        $result.text("Phone Number is not valid.");
        $result.css("color", "red");
      }
    }

    buttonRegisterSetter();
  };

  const isValidForm = () => {
    if (
      isValidName($("#firstname").val()) ||
      isValidName($("#lastname").val()) ||
      isValidEmail($("#email").val()) ||
      isValidPassword($("#password").val()) ||
      isValidConfirmPassword($("#confirmpassword").val()) ||
      isValidPhoneNumber($("#phonenumber").val())
    )
      return false;
    return true;
  };

  const buttonRegisterSetter = () => {
    let button = $("#btn-register");
    if (isValidForm) button.prop("disabled", false);
    else button.prop("disabled", true);
    console.log(button)
  };

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-5">
        <div className="card">
          <img src={require("../../img/Footer/image-9.jpg")} />
        </div>
      </div>
      <div className="col-5">
        <div className="card form-control form-register">
          <div className="">
            <p className="title">* First Name</p>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              onBlur={onNameBlur}
            />
            <div id="firstnameResult"></div>
          </div>
          <div>
            <p className="title">* Last Name</p>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="form-control"
              onBlur={onNameBlur}
            />
            <div id="lastnameResult"></div>
          </div>
          <div>
            <p className="title">* Email</p>
            <input
              type="text"
              id="email"
              className="form-control"
              onBlur={onEmailBlur}
            />
            <div id="emailResult"></div>
          </div>
          <div>
            <p className="title">* Password</p>
            <input
              type="password"
              id="password"
              className="form-control"
              onBlur={onPasswordBlur}
            />
            <div id="passwordResult"></div>
          </div>
          <div>
            <p className="title">*Confirm Password</p>
            <input
              type="password"
              id="confirmpassword"
              className="form-control"
              onBlur={onConfirmPasswordBlur}
            />
            <div id="confirmPasswordResult"></div>
          </div>
          <div>
            <p className="title">* Mobile Number</p>
            <input
              type="text"
              id="phonenumber"
              className="form-control"
              onBlur={onPhoneNumberBlur}
            />
            <div id="phonenumberResult"></div>
          </div>

          <span id="mostro">Don't have a date yet? Enter your best guess.</span>
          <br />
          <span className="mos">* required field</span>
          <br />

          <p id="mostro1" className="register-term">
            By clicking Submit, I agree that the information I provide to
            David’s Bridal will be used to create an account and will be subject
            to the David’s Bridal
            <Link
              to="#"
              className="term-link"
              style={{ textDecoration: "underline" }}
            >
              Terms and Conditions
            </Link>
            and
            <Link
              to="#"
              className="term-link"
              style={{ textDecoration: "underline" }}
            >
              Privacy Policy.
            </Link>
          </p>

          <div className="mt-5 mb-2">
            <input
              name="register"
              className="btn btn-primary"
              id="btn-register"
              value="SUBMIT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
