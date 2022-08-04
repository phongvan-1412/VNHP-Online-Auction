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

    if (!phoneNumber.match(regexPhoneNumber) && phoneNumber >= 10 && phoneNumber <= 12) {
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
      checkValidFullName = false;
    } else {
      if (fullname.length > 20) {
        result.text("error: max length 20");
        result.css("color", "red");
        checkValidFullName = false;
      } else if (isValidName(fullname)) {
        result.text("error: only letter");
        result.css("color", "red");
        checkValidFullName = false;
      } else {
        result.text("");
        checkValidFullName = true;
      }
    }
  };

  const onContactBlur = () => {
    const contact = $("#editcontact").val();
    const result = $("#check-phonenumber-result");

    if (!contact) {
      result.text("Please enter your phone number");
      result.css("color", "red");
      checkValidContact = false;
    } else {
      if (isValidPhoneNumber(contact)) {
        result.text("");
        checkValidContact = true;
      }else if(contact){

      } else {
        result.text("Phone number is invalid.");
        result.css("color", "red");
        checkValidContact = false;
      }
    }
  };

  const convertDatetime = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  const onDobBlur = (e) => {
    const inputDob = e.targete.value;
    const currentDate = convertDatetime(
      new Date(new Date().toLocaleString().substring(0, 9))
    );
    const dob = convertDatetime(new Date(new Date(inputDob)));

    const currentDateTimestamp = new Date(currentDate).getTime();
    const dobTimestamp = new Date(dob).getTime();

    const result = $("#check-dob-result");

    if (!inputDob) {
      result.text("Please insert your date of birth.");
      result.css("color", "red");
      checkValidDob = false;
    } else {
      if (currentDateTimestamp < dobTimestamp) {
        result.text("Date of birth is invalid.");
        result.css("color", "red");
        checkValidDob = false;
      } else {
        result.text("");
        checkValidDob = true;
      }
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

      $("#check-phonenumber-result").text("Please enter your phone number");
      $("#check-phonenumber-result").css("color", "red");

      $("#check-dob-result").text("Please enter your date of birth");
      $("#check-dob-result").css("color", "red");

      return;
    }

    if (!checkValidFullName || !checkValidContact || !checkValidDob) {
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
      <div className="modal-dialog modal-lg" id="mymodal">
        <div className="modal-content bg-dark">
          <div className="modal-header edit-profile-form-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              <b className="title">
                EDIT {currentUserInfo.customer_name} PROFILE
              </b>
            </h4>
            <button
              type="button"
              className="btn-close"
              id="btn-close-edit-profile"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form id="form2">
            <div className="modal-body">
              <div className="card-body">
                <div id="change-profile-result"></div>
                <div className="mb-3 edit-profile-form-input">
                  <label
                    className="small mb-1 edit-profile-form"
                    htmlFor="fullname"
                  >
                    <b>FULL NAME</b>
                  </label>
                  <input
                    className="form-control"
                    id="editfullname"
                    type="text"
                    placeholder="enter your full name"
                    onBlur={onFullNameBlur}
                  />
                  <div id="fullname-check-result"></div>
                </div>

                <div className="mb-3 edit-profile-form-input">
                  <label
                    className="small mb-1 edit-profile-form"
                    htmlFor="email"
                  >
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
                  <label
                    className="small mb-1 edit-profile-form"
                    htmlFor="address"
                  >
                    <b>ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="editaddress"
                    type="text"
                    placeholder="example: 112 Commercial Rd, Footscray VIC 3011, Australia"
                  />
                </div>

                <div className="row gx-3 mb-3 edit-profile-form-input">
                  <div className="col-md-6">
                    <label
                      className="small mb-1 edit-profile-form"
                      htmlFor="contact"
                    >
                      <b>PHONE NUMBER</b>
                    </label>
                    <input
                      className="form-control"
                      id="editcontact"
                      placeholder="example: 0355487651"
                      onBlur={onContactBlur}
                    />
                    <div id="check-phonenumber-result"></div>
                  </div>
                  <div className="col-md-6 edit-profile-form-input">
                    <label
                      className="small mb-1 edit-profile-form"
                      htmlFor="dateofbirth"
                    >
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
            <div className="modal-footer edit-profile-form-input">
              <button
                type="button"
                id="btn-close-edit-popup"
                data-bs-dismiss="modal"
              >
                <b>CLOSE</b>
              </button>
              <button
                type="button"
                id="btn-save-change-edit"
                onClick={saveChangeProfile}
              >
                <b>SAVE CHANGE</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
