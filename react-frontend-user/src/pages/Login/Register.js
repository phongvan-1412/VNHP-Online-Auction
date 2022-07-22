import React from "react";
import { Link } from "react-router-dom";

function Register() {
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
            <input type="text" name="firstname" className="form-control" />
          </div>
          <div>
            <p className="title">* Last Name</p>
            <input type="text" name="lastname" className="form-control" />
          </div>
          <div>
            <p className="title">* Email</p>
            <input type="text" name="email" className="form-control" />
          </div>
          <div>
            <p className="title">* Password</p>
            <input type="password" name="password" className="form-control" />
          </div>

          <div>
            <p className="title">* Mobile Number</p>
            <input type="text" name="phonenumber" className="form-control" />
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
              id="register"
              value="SUBMIT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
