import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

function Register() {
  function isValidName(name) {
    var validNamePattern = /^[A-Za-z\s]+$/;
    return !validNamePattern.test(name.trim());
  }

  let checkValidFirstName = false;
  let checkValidLastName = false;
  let checkValidEmail = false;
  let checkValidPassword = false;
  let checkValidConfirmPassword = false;
  let checkValidPhoneNumber = false;
  let checkEmailExists = 0;
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
        if (e.target.name == "firstname") checkValidFirstName = true;
        if (e.target.name == "lastname") checkValidLastName = true;
      }
    }
    buttonRegisterSetter();
  };

  const isValidEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
        checkValidPassword = true;
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
        checkValidConfirmPassword = true;
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
      $result.text("Please enter your phone number.");
      $result.css("color", "red");
    } else {
      if (isValidPhoneNumber(phoneNumber)) {
        $result.text("Phone Number is valid.");
        $result.css("color", "green");
        checkValidPhoneNumber = true;
      } else {
        $result.text("Phone Number is not valid.");
        $result.css("color", "red");
      }
    }

    buttonRegisterSetter();
  };

  const isValidForm = () => {
    if (
      checkValidFirstName &&
      checkValidLastName &&
      checkValidEmail &&
      checkValidPassword &&
      checkValidConfirmPassword &&
      checkValidPhoneNumber
    )
      return true;
    return false;
  };

  const buttonRegisterSetter = () => {
    if (isValidForm()) {
      $("#btn-register").removeAttr("disabled");
    } else {
      $("#btn-register").prop("disabled", true);
    }
  };

  const buttonRegisterOnClick = () => {
    if (
      !$("#firstname").val() == true ||
      !$("#lastname").val() == true ||
      !$("#email").val() == true ||
      !$("#password").val() == true ||
      !$("#confirmpassword").val() == true ||
      !$("#phonenumber").val() == true
    ) {
      $("#firstnameResult").text("Please enter your first name");
      $("#firstnameResult").css("color", "red");

      $("#lastnameResult").text("Please enter your last name");
      $("#lastnameResult").css("color", "red");

      $("#emailResult").text("Please enter your email");
      $("#emailResult").css("color", "red");

      $("#passwordResult").text("Please enter your pasword");
      $("#passwordResult").css("color", "red");

      $("#confirmPasswordResult").text("Please enter your confirm password");
      $("#confirmPasswordResult").css("color", "red");

      $("#phonenumberResult").text("Please enter your password.");
      $("#phonenumberResult").css("color", "red");

      return;
    }
    const customer_name = $("#firstname").val() + " " + $("#lastname").val();
    const customer_email = $("#email").val();
    const customer_pwd = $("#password").val();
    const customer_contact = $("#phonenumber").val();

    const customer = {
      customer_name,
      customer_email,
      customer_pwd,
      customer_contact,
    };

    axios
      .post(`http://127.0.0.1:8000/api/customerregister`, customer)
      .then(function (response) {
        if (response.data > 0) {
          $("#firstname").text("");
          $("#lastname").text("");
          $("#email").text("");
          $("#password").text("");
          $("#confirmPassword").text("");
          $("#phonenumber").text("");
          
          $("#registerResult").text("Register successfully.");
          $("#registerResult").css("color", "green");
        } else {
          $("#registerResult").text("Register Fail.");
          $("#registerResult").css("color", "red");
        }
      });
  };

  
  const isEmailExists = () => {
    const $result = $("#emailResult");
    const customer_email = $("#email").val();
    const checkEmail = {customer_email};
    $result.text("");

    axios
      .post(`http://127.0.0.1:8000/api/isemailexists`, checkEmail)
      .then(function (response) {
        if (!customer_email) {
          $result.text("*Please enter your email");
          $result.css("color", "red");
        } else {
          if (isValidEmail(customer_email)) {
            if (response.data > 0) {
              $result.text(customer_email + " already exists.");
              $result.css("color", "red");
            } else {
              $result.text(customer_email + " is valid.");
              $result.css("color", "green");
              checkValidEmail = true;
            }
          } else {
            $result.text(customer_email + " is not valid email.");
            $result.css("color", "red");
          }
        }
        buttonRegisterSetter();
      });
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
        <div id="registerResult"></div>
        <div className="card form-control form-register">
          <div className="">
            <p className="title">* First Name</p>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              required
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
              required
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
              required
              onBlur={isEmailExists}
            />
            <div id="emailResult"></div>
          </div>
          <div>
            <p className="title">* Password</p>
            <input
              type="password"
              id="password"
              className="form-control"
              required
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
              required
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
              required
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
            <button
              type="submit"
              className="btn btn-primary float-right forget-password-form"
              id="btn-register"
              onClick={buttonRegisterOnClick}
              value="Register"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
