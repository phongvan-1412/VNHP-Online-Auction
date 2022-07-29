import React from "react";
import $ from "jquery";
import axios from "axios";

function EditProfile({ currentUserInfo, updateUserLogin }) {
  function isValidName(name) {
    var validNamePattern = /^[A-Za-z\s]+$/;
    return !validNamePattern.test(name.trim());
  }

  const isValidPhoneNumber = (phoneNumber) => {
    const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;

    if (!phoneNumber.match(regexPhoneNumber)) {
      return false;
    }
    return true;
  };

  let checkValidFullName = false;
  let checkValidContact = false;
  let checkValidDob = false;

  const onFullNameBlur = () => {
    const fullname = $("#editfullname").val();
    const result = $("#fullname-check-result");

    if (!fullname) {
      result.text("Please enter your name");
      result.css("color", "red");
    } else {
      if (fullname.length < 2) {
        result.text("Your name too short.");
        result.css("color", "red");
      } else if (isValidName(fullname)) {
        result.text(fullname + " is not valid.");
        result.css("color", "red");
      } else {
        result.text(fullname + " is valid.");
        result.css("color", "green");
        checkValidFullName = true;
      }
    }
    buttonSaveChanngeProfileSetter();
  };

  const onContactBlur = () => {
    const contact = $("#editcontact").val();
    const result = $("#check-phonenumber-result");

    if (!contact) {
      result.text("Please enter your phone number");
      result.css("color", "red");
    } else {
      if (isValidPhoneNumber(contact)) {
        result.text(contact + " is valid.");
        result.css("color", "green");
        checkValidContact = true;
      } else {
        result.text(contact + " is not valid.");
        result.css("color", "red");
      }
    }
    buttonSaveChanngeProfileSetter();
  };

  const convertDatetime = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  const onDobBlur = () => {
    const currentDate = convertDatetime(
      new Date(new Date().toLocaleString().substring(0, 9))
    );
    const dob = convertDatetime(
      new Date(new Date($("#editdateofbirth").val()))
    );

    const currentDateTimestamp = new Date(currentDate).getTime();
    const dobTimestamp = new Date(dob).getTime();

    const result = $("#check-dob-result");

    if (currentDateTimestamp < dobTimestamp) {
      result.text("Date of birth is not valid.");
      result.css("color", "red");
    } else {
      result.text("Date of birth is valid.");
      result.css("color", "green");
      checkValidContact = true;
    }
    buttonSaveChanngeProfileSetter();
  };

  const buttonSaveChanngeProfileSetter = () => {
    if (checkValidFullName && checkValidContact && checkValidDob) {
      $("#btn-save-change").removeAttr("disabled");
    } else {
      $("#btn-save-change").prop("disabled",true);
    }
  };

  const saveChangeProfile = () => {
    const customer_name = $("#editfullname").val();
    const customer_email = $("#editemail").val();
    const customer_address = $("#editaddress").val();
    const customer_contact = $("#editcontact").val();
    const customer_dob = $("#editdateofbirth").val();

    if (
      !customer_name ||
      !customer_contact ||
      !customer_dob
    ) {
      $("#fullname-check-result").text("Please enter your first name");
      $("#fullname-check-result").css("color", "red");

      $("#check-phonenumber-result").text("Please enter your last name");
      $("#check-phonenumber-result").css("color", "red");

      $("#check-dob-result").text("Please enter your pasword");
      $("#check-dob-result").css("color", "red");

      return;
    }

    let formData = new FormData();
    formData.set("customer_name", customer_name);
    formData.set("customer_email", customer_email);
    formData.set("customer_address", customer_address);
    formData.set("customer_contact", customer_contact);
    formData.set("customer_dob", customer_dob);
    formData.set("customer_img_name", currentUserInfo.customer_img_name);

    axios
      .post(`http://127.0.0.1:8000/api/customerupdateinfo`, formData)
      .then(function (response) {
        if (response.data == 0) {
          alert("Something wrong in server");
        } else {
          localStorage.removeItem("customer_info");
          localStorage.setItem("customer_info", JSON.stringify(response.data));
          updateUserLogin();

          customer_name.val("");
          customer_address.val("");
          customer_contact.val("");
          customer_dob.val("");

          // window.location.href = "http://localhost:3000/userprofile";
        }
      });
  };

  return (
    <div
      className="modal fade"
      id="editprofile"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              Edit {currentUserInfo.customer_name} Profile
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              <div className="mb-3">
                <label className="small mb-1" htmlFor="fullname">
                  Full name
                </label>
                <input
                  className="form-control"
                  id="editfullname"
                  type="text"
                  onBlur={onFullNameBlur}
                />
                <div id="fullname-check-result"></div>
              </div>

              <div className="mb-3">
                <label className="small mb-1" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="editemail"
                  disabled
                  value={currentUserInfo.customer_email}
                />
              </div>

              <div className="mb-3">
                <label className="small mb-1" htmlFor="address">
                  Address
                </label>
                <input className="form-control" id="editaddress" type="text" />
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="contact">
                    Phone number
                  </label>
                  <input
                    className="form-control"
                    id="editcontact"
                    type="tel"
                    onBlur={onContactBlur}
                  />
                  <div id="check-phonenumber-result"></div>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="dateofbirth">
                    Birthday
                  </label>
                  <input
                    className="form-control"
                    id="editdateofbirth"
                    type="date"
                    onBlur={onDobBlur}
                  />
                  <div id="check-dob-result"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="btn-save-change"
              onClick={saveChangeProfile}
            >
              Save change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
