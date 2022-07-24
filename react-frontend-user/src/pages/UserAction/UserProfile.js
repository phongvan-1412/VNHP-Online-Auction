import React from "react";
import $ from "jquery";

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

  return (
    <div className="container">
      <div className="row">
        <div class="card col-4 mb-2 mb-xl-0">
          <div class="card-header"><h4>Profile Picture</h4></div>
          <div class="card-body text-center">
            <img
              class="img-account-profile rounded-circle mb-2"
              src="{{asset('avatar/1.jpg')}}"
              alt=""
            />
            <img
              class="img-account-profile rounded-circle mb-2"
              src="{{asset('avatar')}}/{{Session::get('customer_img_name')}}"
              alt=""
            />
            <div class="small font-italic text-muted mb-4">
              JPG or PNG no larger than 5 MB
            </div>
            <input type="file" name="avatar" />
            <div class="card mt-3">
              <button class="btn btn-primary" id="changepwd">
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-8" id="account-detail">
          <div class="card mb-4">
            <div class="card-header">
              <h4>Account Details</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label class="small mb-1" for="fullname">
                  Full name
                </label>
                <input
                  class="form-control"
                  id="fullname"
                  type="text"
                  placeholder="Enter your fullname"
                />
              </div>

              <div class="mb-3">
                <label class="small mb-1" for="email">
                  Email address
                </label>
                <input class="form-control" id="email" disabled />
              </div>

              <div class="mb-3">
                <label class="small mb-1" for="address">
                  Address
                </label>
                <input
                  class="form-control"
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>

              <div class="row gx-3 mb-3">
                <div class="col-md-6">
                  <label class="small mb-1" for="phonenumber">
                    Phone number
                  </label>
                  <input class="form-control" id="phonenumber" type="tel" />
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="dateofbirth">
                    Birthday
                  </label>
                  <input
                    class="form-control"
                    id="dateofbirth"
                    type="date"
                    placeholder="Enter your birthday"
                  />
                </div>
              </div>
              <button class="btn btn-primary" id="btn-update-info">
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
