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

  const onNameBlur = (e) => {
    const $result = $("#" + e.target.name + "Result");
    const name = $("#" + e.target.name).val();
    $result.text("");

    if (!name) {
      $result.text("Please enter your name");
      $result.css("color", "red");
    } else {
      if (name.length < 2) {
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
        onConfirmPasswordBlur();
      } else {
        $result.text("Password is not valid.");
        $result.css("color", "red");
      }
    }
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
  };

  const isEmailExists = () => {
    const $result = $("#emailResult");
    const customer_email = $("#email").val();
    const checkEmail = { customer_email };
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
      });
  };

  function showTime() {
    window.location.href = "http://localhost:3000/login";
  }

  const buttonRegisterOnClick = () => {
    if (
      !$("#firstname").val() &&
      !$("#lastname").val() &&
      !$("#email").val() &&
      !$("#confirmpassword").val() &&
      !$("#phonenumber").val() &&
      !$("#phonenumber").val()
    ) {
      $("#firstnameResult").text("Please enter your first name");
      $("#firstnameResult").css("color", "red");

      $("#lastnameResult").text("Please enter your last name");
      $("#lastnameResult").css("color", "red");

      $("#emailResult").text("Please enter your pasword");
      $("#emailResult").css("color", "red");

      $("#passwordResult").text("Please enter your pasword");
      $("#passwordResult").css("color", "red");

      $("#confirmPasswordResult").text("Please enter your confirm password");
      $("#confirmPasswordResult").css("color", "red");

      $("#phonenumberResult").text("Please enter your password.");
      $("#phonenumberResult").css("color", "red");
      return;
    }

    if (!$("#firstname").val()) {
      $("#firstnameResult").text("Please enter your first name");
      $("#firstnameResult").css("color", "red");
      return;
    }

    if (!$("#lastname").val()) {
      $("#lastnameResult").text("Please enter your last name");
      $("#lastnameResult").css("color", "red");
      return;
    }

    if (!$("#email").val()) {
      $("#emailResult").text("Please enter your pasword");
      $("#emailResult").css("color", "red");
      return;
    }

    if (!$("#confirmpassword").val()) {
      $("#confirmPasswordResult").text("Please enter your confirm password");
      $("#confirmPasswordResult").css("color", "red");
      return;
    }

    if (!$("#phonenumber").val()) {
      $("#phonenumberResult").text("Please enter your password.");
      $("#phonenumberResult").css("color", "red");
      return;
    }

    if (
      checkValidFirstName ||
      checkValidLastName ||
      checkValidEmail ||
      checkValidPassword ||
      checkValidConfirmPassword ||
      checkValidPhoneNumber
    ) {
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
          $("#firstnameResult").text("");

          $("#lastname").text("");
          $("#lastnameResult").text("");

          $("#email").text("");
          $("#emailResult").text("");

          $("#password").text("");
          $("#passwordResult").text("");

          $("#confirmPassword").text("");
          $("#confirmPasswordResult").text("");

          $("#phonenumber").text("");
          $("#phonenumberResult").text("");

          $("#registerResult").text(
            "Register successfully. Please check your email.Redirecting to login."
          );
          $("#registerResult").css("color", "green");
          setInterval(showTime, 5000);
        } else {
          $("#firstname").text("");
          $("#firstnameResult").text("");

          $("#lastname").text("");
          $("#lastnameResult").text("");

          $("#email").text("");
          $("#emailResult").text("");

          $("#password").text("");
          $("#passwordResult").text("");

          $("#confirmPassword").text("");
          $("#confirmPasswordResult").text("");

          $("#phonenumber").text("");
          $("#phonenumberResult").text("");

          $("#registerResult").text("Register Fail.");
          $("#registerResult").css("color", "red");
        }
      });
  };

  return (
    <div className="row register-form-group">
      <div className="col-xl-1 col-lg-1"></div>
      <div className="col-xl-5 col-lg-4 col-md-4 register-img-form">
        <img id="register-img" src={require("../../img/Footer/image-9.jpg")} />
        <img id="overlay" src={require("../../img/Footer/image-8.jpg")} />
      </div>

      <div className="col-xl-5 col-lg-6 col-md-8">
        <div className="card form-control form-register">
          <div className="register-form-control">
            <label>* First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              required
              onBlur={onNameBlur}
            />
            <div
              id="firstnameResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="register-form-control">
            <label>* Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className="form-control"
              onBlur={onNameBlur}
            />
            <div
              id="lastnameResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="register-form-control ">
            <label>* Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              required
              onBlur={isEmailExists}
            />
            <div
              id="emailResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="register-form-control">
            <label>* Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
              onBlur={onPasswordBlur}
            />
            <div
              id="passwordResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="register-form-control">
            <label>*Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              className="form-control"
              required
              onBlur={onConfirmPasswordBlur}
            />
            <div
              id="confirmPasswordResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="register-form-control">
            <label>* Mobile Number</label>
            <input
              type="text"
              id="phonenumber"
              className="form-control"
              required
              onBlur={onPhoneNumberBlur}
            />
            <div
              id="phonenumberResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>

          {/* <span id="mostro">Don't have a date yet? Enter your best guess.</span> */}
          <br />
          <span id="mos">* required field</span>
          <br />

          <p id="mostro1" className="register-term">
            By clicking Register, I agree that the information I provide to
            VNHP Aution will be used to create an account and will be subject
            to the VNHP Aution{" "}
            <Link
              to="#"
              className="term-link"
              style={{ textDecoration: "underline" }}
            >
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="#"
              className="term-link"
              style={{ textDecoration: "underline" }}
            >
              Privacy Policy.
            </Link>
          </p>

          <div className="mt-5 mb-2 btn-register-group">
            <div
              id="registerResult"
              style={{ position: "absolute", marginTop: "-30px" }}
            ></div>
            <button
              type="submit"
              className="forget-password-form"
              id="btn-register"
              onClick={buttonRegisterOnClick}
              value="Register"
            >
              <b>REGISTER</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
