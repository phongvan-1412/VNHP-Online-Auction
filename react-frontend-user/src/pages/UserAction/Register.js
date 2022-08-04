import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { Component } from "react";

class Register extends Component {
  state = {
    checkValidFirstName: false,
    checkValidLastName: false,
    checkValidEmail: false,
    checkValidPassword: false,
    checkValidConfirmPassword: false,
    checkValidPhoneNumber: false,
    checkValidBirthday: false,
    loading: false,
  };
  render() {
    function isValidName(name) {
      var validNamePattern = /^[A-Za-z\s]+$/;
      return !validNamePattern.test(name.trim());
    }

    const onFirstNameBlur = (e) => {
      const $result = $("#firstnameResult");
      const name = e.target.value;

      if (!name) {
        $result.text("Please enter your name");
        $result.css("color", "red");
        this.setState({ checkValidFirstName: false });
      } else {
        if (isValidName(name)) {
          $result.text("error: letter only");
          $result.css("color", "red");
          this.setState({ checkValidFirstName: false });
        } else if (name.length > 10) {
          $result.text("erro: max length 10.");
          $result.css("color", "red");
          this.setState({ checkValidFirstName: false });
        } else {
          $result.text("");
          this.setState({ checkValidFirstName: true });
        }
      }
    };

    const onLastNameBlur = (e) => {
      const $result = $("#lastnameResult");
      const name = e.target.value;

      if (!name) {
        $result.text("Please enter your name");
        $result.css("color", "red");
        this.setState({ checkValidLastName: false });
      } else {
        if (isValidName(name)) {
          $result.text("error: letter only");
          $result.css("color", "red");
          this.setState({ checkValidLastName: false });
        } else if (name.length > 10) {
          $result.text("erro: max length 10.");
          $result.css("color", "red");
          this.setState({ checkValidLastName: false });
        } else {
          $result.text("");
          this.setState({ checkValidLastName: true });
        }
      }
    };

    const isValidEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const onPasswordBlur = () => {
      const $result = $("#passwordResult");
      const password = $("#password").val();

      if (!password) {
        $result.text("Please enter your password.");
        $result.css("color", "red");
        this.setState({ checkValidPassword: false });
      } else {
        if (password.length >= 6) {
          $result.text("");
          this.setState({ checkValidPassword: true });
          onConfirmPasswordBlur();
        } else {
          $result.text("Use 6 characters or more for your password");
          $result.css("color", "red");
          this.setState({ checkValidPassword: false });
        }
      }
    };

    const onConfirmPasswordBlur = () => {
      const $result = $("#confirmPasswordResult");
      const password = $("#confirmpassword").val();

      if (!password) {
        $result.text("Please enter your confirm password.");
        $result.css("color", "red");
        this.setState({ checkValidConfirmPassword: false });
      } else {
        if (password.length >= 6) {
          $result.text("");
          this.setState({ checkValidConfirmPassword: true });
        } else {
          $result.text("Please enter same password.");
          $result.css("color", "red");
          this.setState({ checkValidConfirmPassword: false });
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

    const onBirthdayOnBlur = (e) => {
      const result = $("#birthdayResult");
      var optimizedBirthday = e.target.value.replace(/-/g, "/");

      //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
      var myBirthday = new Date(optimizedBirthday);

      // set current day on 01:00:00 hours GMT+0100 (CET)
      var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";

      // calculate age comparing current date and borthday
      var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

      if (!e.target.value) {
        result.text("Please insert your date of birth.");
        result.css("color", "red");
        this.setState({ checkValidBirthday: false });
      } else {
        if (myAge < 18) {
          result.text("Date of birth is invalid.");
          result.css("color", "red");
          this.setState({ checkValidBirthday: false });
        } else {
          result.text("");
          this.setState({ checkValidBirthday: true });
        }
      }
    };

    const onPhoneNumberBlur = () => {
      const $result = $("#phonenumberResult");
      const phoneNumber = $("#phonenumber").val();
      if (!phoneNumber) {
        $result.text("Please enter your phone number.");
        $result.css("color", "red");
        this.setState({ checkValidPhoneNumber: false });
      } else {
        if (isValidPhoneNumber(phoneNumber)) {
          $result.text("");
          this.setState({ checkValidPhoneNumber: true });
        } else {
          $result.text("Please check your phone nunber.");
          $result.css("color", "red");
          this.setState({ checkValidPhoneNumber: false });
        }
      }
    };

    const isEmailExists = () => {
      const $result = $("#emailResult");
      const customer_email = $("#email").val();
      const checkEmail = { customer_email };
      $result.text("");
      var self = this;
      axios
        .post(`http://127.0.0.1:8000/api/isemailexists`, checkEmail)
        .then(function (response) {
          if (!customer_email) {
            $result.text("Please enter your email");
            $result.css("color", "red");
          } else {
            if (isValidEmail(customer_email)) {
              if (response.data > 0) {
                $result.text(customer_email + " already exists.");
                $result.css("color", "red");
              } else {
                $result.text("");
                self.setState({ checkValidEmail: true });
              }
            } else {
              $result.text(customer_email + " is not valid email.");
              $result.css("color", "red");
            }
          }
        });
    };

    const buttonRegisterOnClick = () => {
      if (
        !$("#firstname").val() &&
        !$("#lastname").val() &&
        !$("#email").val() &&
        !$("#confirmpassword").val() &&
        !$("#password").val() &&
        !$("#phonenumber").val() &&
        !$("#birthday").val()
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

        $("#birthdayResult").text("Please enter your date of birth");
        $("#birthdayResult").css("color", "red");

        $("#phonenumberResult").text("Please enter your phone number.");
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
        $("#emailResult").text("Please enter your email");
        $("#emailResult").css("color", "red");
        return;
      }

      if (!$("#confirmpassword").val()) {
        $("#confirmPasswordResult").text("Please enter your confirm password");
        $("#confirmPasswordResult").css("color", "red");
        return;
      }

      if (!$("#birthday").val()) {
        $("#birthdayResult").text("Please enter your date of birth");
        $("#birthdayResult").css("color", "red");
        return;
      }

      if (!$("#phonenumber").val()) {
        $("#phonenumberResult").text("Please enter your phone number.");
        $("#phonenumberResult").css("color", "red");
        return;
      }

      if (
        !this.state.checkValidFirstName ||
        !this.state.checkValidLastName ||
        !this.state.checkValidEmail ||
        !this.state.checkValidPassword ||
        !this.state.checkValidConfirmPassword ||
        !this.state.checkValidPhoneNumber ||
        !this.state.checkValidBirthday
      ) {
        return;
      }

      const customer_name = $("#firstname").val() + " " + $("#lastname").val();
      const customer_email = $("#email").val();
      const customer_pwd = $("#password").val();
      const customer_dob = $("#birthday").val();
      const customer_contact = $("#phonenumber").val();

      const customer = {
        customer_name,
        customer_email,
        customer_pwd,
        customer_dob,
        customer_contact,
      };

      this.setState({ loading: true });
      const self = this;
      axios
        .post(`http://127.0.0.1:8000/api/customerregister`, customer)
        .then(function (response) {
          if (response.data > 0) {
            $("#firstname").val("");
            $("#firstnameResult").text("");

            $("#lastname").val("");
            $("#lastnameResult").text("");

            $("#email").val("");
            $("#emailResult").text("");

            $("#password").val("");
            $("#passwordResult").text("");

            $("#confirmpassword").val("");
            $("#confirmPasswordResult").text("");

            $("#birthday").val("");
            $("#birthdayResult").text("");

            $("#phonenumber").val("");
            $("#phonenumberResult").text("");

            self.setState({ loading: false });

            $("#registerResult").text(
              "Register successfully. Please activate your email."
            );
            $("#registerResult").css("color", "green");
          }
        });
    };

    return (
      <div className="row register-form-group">
        <div className="col-xl-1 col-lg-1"></div>
        <div className="col-xl-5 col-lg-4 col-md-4 register-img-form">
          <img
            id="register-img"
            src={require("../../img/Footer/image-9.jpg")}
          />
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
                placeholder="max length 10 character"
                onBlur={onFirstNameBlur}
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
                placeholder="max length 10 character"
                className="form-control"
                onBlur={onLastNameBlur}
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
                placeholder="example: johnnaton@gmail.com"
                className="form-control"
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
                placeholder="enter 6 or more character"
                className="form-control"
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
                placeholder="enter same password"
                className="form-control"
                onBlur={onConfirmPasswordBlur}
              />
              <div
                id="confirmPasswordResult"
                className="small font-italic form-waring-text"
              ></div>
            </div>
            <div className="register-form-control">
              <label>* Birthday</label>
              <input
                type="date"
                id="birthday"
                placeholder="example: 0355487651"
                className="form-control"
                onBlur={onBirthdayOnBlur}
              />
              <div
                id="birthdayResult"
                className="small font-italic form-waring-text"
              ></div>
            </div>
            <div className="register-form-control">
              <label>* Mobile Number</label>
              <input
                type="text"
                id="phonenumber"
                placeholder="example: 0355487651"
                className="form-control"
                onBlur={onPhoneNumberBlur}
              />
              <div
                id="phonenumberResult"
                className="small font-italic form-waring-text"
              ></div>
            </div>
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
                className="forget-password-form"
                id="btn-register"
                onClick={buttonRegisterOnClick}
              >
                <b>REGISTER</b>
              </button>
              {this.state.loading && (
                <div className="spinner-border text-light" id="register-loading-ring" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
