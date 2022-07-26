import React from "react";
import $ from "jquery";
import axios from "axios";

function UserProfile() {
  const isUserLogin = () => {
    let tmp = {};
    JSON.parse(localStorage.getItem("customer_info")).map((user) => {
      tmp = user;
    });
    $("#fullname").val(tmp.customer_name);
    $("#fullname").prop("disabled", true);
    $("#email").val(tmp.customer_email);
    $("#address").val(tmp.customer_address);
    $("#address").prop("disabled", true);
    $("#phonenumber").val(tmp.customer_contact);
    $("#phonenumber").prop("disabled", true);
    $("#dateofbirth").val(tmp.customer_dob);
    $("#dateofbirth").prop("disabled", true);
  };

  isUserLogin();

  const changePassword = () => {};

  const saveChanges = () => {
    const file = $("#user_img_name").prop("files")[0];
    const name = file.name;
    const tmp = name.indexOf(".");

    const img_extension = name.substr(tmp, tmp + 4);

    let formData = new FormData();
    formData.set("user_img_name", file);
    formData.set("img_extension", img_extension);

    axios
      .post(`http://127.0.0.1:8000/api/customerupdateinfo`, formData)
      .then(function (response) {
      });
  };

  function onAvatarChange() {
    const file = $("#user_img_name").prop("files")[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      $("#avatar-img").prop('src', reader.result);
    };
  }
  return (
    <div className="container">
      <div className="row user-account-profile">
        <div className="card col-4 mb-2 mb-xl-0">
          <div className="card-header">
            <h4>Profile Picture</h4>
          </div>
          <div className="card-body text-center">
            <img
              className="img-user-account-profile rounded-circle mb-2"
              id="avatar-img"
              src={require(`../../img/Footer/image-1.jpg`)}
            />
            <div className="small font-italic text-muted mb-4">
              JPG or PNG no larger than 5 MB
            </div>
            <input
              type="file"
              id="user_img_name"
              data-name="user_img_name"
              onChange={onAvatarChange}
            />
            <div className="card mt-3">
              <button
                className="btn btn-primary"
                id="changepwd"
                onClick={changePassword}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div className="col-8" id="account-detail">
          <div className="card mb-4">
            <div className="card-header">
              <h4>Account Details</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="small mb-1" htmlFor="fullname">
                  Full name
                </label>
                <input className="form-control" id="fullname" type="text" />
              </div>

              <div className="mb-3">
                <label className="small mb-1" htmlFor="email">
                  Email address
                </label>
                <input className="form-control" id="email" disabled />
              </div>

              <div className="mb-3">
                <label className="small mb-1" htmlFor="address">
                  Address
                </label>
                <input className="form-control" id="address" type="text" />
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="phonenumber">
                    Phone number
                  </label>
                  <input className="form-control" id="phonenumber" type="tel" />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="dateofbirth">
                    Birthday
                  </label>
                  <input
                    className="form-control"
                    id="dateofbirth"
                    type="date"
                    placeholder="Enter your birthday"
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                id="btn-update-info"
                onClick={saveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
