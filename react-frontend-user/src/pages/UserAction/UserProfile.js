import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";

class UserProfile extends Component {
  state = [{ viewIndex: 1 }];
  componentDidMount() {
    this.setState({ viewIndex: 1 });
  }
  render() {
    const { userinfo, updateUserLogin } = this.props;
    let currentUserInfo = userinfo;
    $(document).keypress(function (e) {
      if (
        e.which == 13 &&
        window.location.href === "http://localhost:3000/userprofile"
      ) {
        console.log(1);
        if (localStorage.getItem("customer_info") == null) {
          window.location.href = "http://localhost:3000/login";
        } else {
          currentUserInfo = JSON.parse(localStorage.getItem("customer_info"));
        }
      }
    });

    if (performance.navigation.type === 1) {
      if (localStorage.getItem("customer_info") == null) {
        window.location.href = "http://localhost:3000/login";
      } else {
        currentUserInfo = JSON.parse(localStorage.getItem("customer_info"));
      }
    }
    function onAvatarChange() {
      $("#avatar-img-result").text("");
      const file = $("#user-avatar-img").prop("files")[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        $("#avatar-img").prop("src", reader.result);
      };
    }

    const onUpdateUserAvatar = () => {
      const result = $("#avatar-img-result");

      if ($("#user-avatar-img").prop("files")[0] == null) {
        result.text("Please choose your avatar.");
        result.css("color", "red");
        return;
      }
      const customerImage = $("#user-avatar-img").prop("files")[0];
      const customerImageName = customerImage.name;
      const index = customerImageName.indexOf(".");
      const img_extension = customerImageName.substr(index, index + 4);
      const customer_email = $("#email").val();
      const customer_name = $("#fullname").val();
      const customer_address = $("#address").val();
      const customer_contact = $("#contact").val();
      const customer_dob = $("#dateofbirth").val();

      let formData = new FormData();
      formData.set("user_avatar_image", customerImage);
      formData.set("img_extension", img_extension);
      formData.set("customer_email", customer_email);
      formData.set("customer_name", customer_name);
      formData.set("customer_address", customer_address);
      formData.set("customer_contact", customer_contact);
      formData.set("customer_dob", customer_dob);

      axios
        .post(`http://127.0.0.1:8000/api/customerchangeavatar`, formData)
        .then(function (response) {
          if (response.data == 0) {
            result.text("Change avatar fail.");
            result.css("color", "red");
          } else {
            localStorage.removeItem("customer_info");
            localStorage.setItem(
              "customer_info",
              JSON.stringify(response.data)
            );
            updateUserLogin();
            result.text("Change avatar successfully.");
            result.css("color", "green");
          }
        });
    };
   
    return (
      <div className="container">
        <div className="row user-account-profile">
          <div className="col-xl-4 card">
            <div className="row">
              <div className="card-header">
                <h4>
                  <b>PROFILE PICTURE</b>
                </h4>
              </div>
              <div className="card-body text-center">
                <div className="row profile-img-form">
                  <div>
                    <img
                      className="img-user-account-profile rounded-circle"
                      id="avatar-img"
                      src={require(`../../../../LaravelAPI/public/UserImage/${currentUserInfo.customer_img_name}`)}
                    />
                  </div>

                  {/* <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div> */}
                  <div id="user-avatar-img-wraper">
                    <div id="avatar-img-result"></div>
                  </div>
                  {/* <i class="fa-solid fa-images-user" id="user-profile-image"></i> */}
                  <div id="user-avatar-img-wraper">
                    <input
                      type="file"
                      id="user-avatar-img"
                      onChange={onAvatarChange}
                    />
                  </div>

                  <div>
                    <button id="btn-change-avatar" onClick={onUpdateUserAvatar}>
                      <b>CHANGE AVATAR</b>
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      id="btn-change-password"
                      data-bs-toggle="modal"
                      data-bs-target="#changepassword"
                    >
                      <b>CHANGE PASSWORD</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xl-8 col-lg-12 col-md-12" id="account-detail">
            <div className="card" id="account-detail-body">
              <div className="card-header">
                <h4>
                  <b>ACCOUNT DETAILS</b>
                </h4>
              </div>
              <div className="card-body user-profile-body">
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="fullname">
                    <b>FULL NAME</b>
                  </label>
                  <input
                    className="form-control"
                    id="fullname"
                    type="text"
                    disabled
                    value={currentUserInfo.customer_name}
                  />
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="email">
                    <b>EMAIL ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    disabled
                    value={currentUserInfo.customer_email}
                  />
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="address">
                    <b>ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="address"
                    type="text"
                    disabled
                    value={currentUserInfo.customer_address}
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="contact">
                      <b>PHONE NUMBER</b>
                    </label>
                    <input
                      className="form-control"
                      id="contact"
                      type="tel"
                      disabled
                      value={currentUserInfo.customer_contact}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="dateofbirth">
                      <b>BIRTHDAY</b>
                    </label>
                    <input
                      className="form-control"
                      id="dateofbirth"
                      type="date"
                      disabled
                      value={currentUserInfo.customer_dob}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-edit"
                  data-bs-toggle="modal"
                  data-bs-target="#editprofile"
                >
                  <b>EDIT</b>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr id="user-profile-hr" />
        <div className="row btn-form-group">
          <button
            id={this.state.viewIndex == 1 ? "btn-fade-in" : "btn-fade-out"}
            onClick={() => this.setState({ viewIndex: 1 })}
          >
            <b>AUTION HISTORY</b>
          </button>
          <button
            id={this.state.viewIndex == 2 ? "btn-fade-in" : "btn-fade-out"}
            onClick={() => this.setState({ viewIndex: 2 })}
          >
            <b>BILL HISTORY</b>
          </button>
        </div>

        <hr id="user-profile-hr" />
        <div>
          <div
            className={
              this.state.viewIndex == 1 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            <b>AUTION HISTORY</b>
            <div id="aution-history-table"></div>
          </div>
          <div
            className={
              this.state.viewIndex == 2 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            <b>BILL HISTORY</b>
            <div id="bill-history-table"></div>
          </div>
        </div>
        <ChangePassword
          currentUserInfo={currentUserInfo}
          updateUserLogin={updateUserLogin}
        />
        <EditProfile
          currentUserInfo={currentUserInfo}
          updateUserLogin={updateUserLogin}
        />
      </div>
    );
  }
}
export default UserProfile;
