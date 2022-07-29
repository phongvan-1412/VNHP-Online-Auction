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
      checkValidDob = true;
    }
    buttonSaveChanngeProfileSetter();
  };

  const buttonSaveChanngeProfileSetter = () => {
    if (checkValidFullName && checkValidContact && checkValidDob) {
      $("#btn-save-change").removeAttr("disabled");
    } else {
      $("#btn-save-change").prop("disabled", true);
    }
  };

  const saveChangeProfile = () => {
    const customer_name = $("#editfullname").val();
    const customer_email = $("#editemail").val();
    const customer_address = $("#editaddress").val();
    const customer_contact = $("#editcontact").val();
    const customer_dob = $("#editdateofbirth").val();

    if (!customer_name || !customer_contact || !customer_dob) {
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
          $("#change-profile-result").text(
            "Something wrong.Update infomation fail."
          );
          $("#change-profile-result").css("color", "red");
        } else {
          localStorage.removeItem("customer_info");
          localStorage.setItem("customer_info", JSON.stringify(response.data));
          updateUserLogin();
          $("#change-profile-result").text("Update infomation successfully.");
          $("#change-profile-result").css("color", "green");

          customer_name.val("");
          customer_address.val("");
          customer_contact.val("");
          customer_dob.val("");

          // window.location.href = "http://localhost:3000/userprofile";
        }
      });
  };

  const resetForm = () => {
    $("#editfullname").val("");
    $("#fullname-check-result").text("");

    $("#editcontact").val("");
    $("#check-phonenumber-result").text("");

    $("#editdateofbirth").val("");
    $("#check-dob-result").text("");

    $("#change-profile-result").text("");
  };

  const test = () => {
    $("#mymodal").on("hidden.bs.modal", function (e) {
      resetForm();
    });
  };

  return (
    <div
      className="modal fade"
      id="editprofile"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      onClick={test}
    >
      <div className="modal-dialog modal-lg" id="mymodal">
        <div className="modal-content bg-dark">
          <div className="modal-header edit-profile-form-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              <b className="title">EDIT {currentUserInfo.customer_name} PROFILE</b>
            </h4>
            <button
              type="button"
              className="btn-close"
              id="btn-close-edit-profile"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={resetForm}
            ></button>
          </div>
          <form id="form2">
            <div className="modal-body">
              <div className="card-body">
                <div id="change-profile-result"></div>
                <div className="mb-3 edit-profile-form-input">
                  <label className="small mb-1 edit-profile-form" htmlFor="fullname">
                    <b>FULL NAME</b>
                  </label>
                  <input
                    className="form-control"
                    id="editfullname"
                    type="text"
                    onBlur={onFullNameBlur}
                  />
                  <div id="fullname-check-result"></div>
                </div>

                <div className="mb-3 edit-profile-form-input">
                  <label className="small mb-1 edit-profile-form" htmlFor="email">
                    <b>EMAIL ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="editemail"
                    disabled
                    value={currentUserInfo.customer_email}
                  />
                </div>

                <div className="mb-3 edit-profile-form-input">
                  <label className="small mb-1 edit-profile-form" htmlFor="address">
                    <b>ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="editaddress"
                    type="text"
                  />
                </div>

                <div className="row gx-3 mb-3 edit-profile-form-input">
                  <div className="col-md-6">
                    <label className="small mb-1 edit-profile-form" htmlFor="contact">
                      <b>PHONE NUMBER</b>
                    </label>
                    <input
                      className="form-control"
                      id="editcontact"
                      type="tel"
                      onBlur={onContactBlur}
                    />
                    <div id="check-phonenumber-result"></div>
                  </div>
                  <div className="col-md-6 edit-profile-form-input">
                    <label className="small mb-1 edit-profile-form" htmlFor="dateofbirth">
                      <b>BIRTHDAY</b>
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
            <div className="modal-footer edit-profile-form-btn">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetForm}
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
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
