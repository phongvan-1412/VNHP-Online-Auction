import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import UserAutionHistory from "./UserAutionHistory";
import UserBillHistory from "./UserBillHistory";

class UserProfile extends Component {
  state = { viewIndex: 1 };

  componentDidMount() {
    this.setState({ viewIndex: 1 });
  }
  render() {
    const { userinfo, autionHistory, billHistory, newBill, updateUserLogin,updateAutionHistory,updateBillHistory,updateNewBill } =
      this.props;

    let currentUserInfo = userinfo;
    if(performance.navigation.type === 1) {
      if (localStorage.getItem("customer_info") == null) {
        window.location.href = "http://localhost:3000/login";
      } else {
        currentUserInfo = JSON.parse(localStorage.getItem("customer_info"));
      }
    }

    if (currentUserInfo.customer_img_name == null) {
      window.location.href = "http://localhost:3000";
    }

    const currentAutionHistory = autionHistory.filter(
      (ah) => ah.customer_id == currentUserInfo.customer_id
    );
    const currentBillHistory = billHistory.filter(
      (bh) => bh.customer_id == currentUserInfo.customer_id
    );
    const currentNewBill = newBill.filter(
      (nb) => nb.customer_id == currentUserInfo.customer_id
    );

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

    const btnAutionHistoryOnClick = () => {
      this.setState({ viewIndex: 1 });
      updateAutionHistory();
    }

    const btnBillHistoryOnClick = () => {
      this.setState({ viewIndex: 2 });
      updateBillHistory();
    }

    const btnNewBillOnClick = () => {
      this.setState({ viewIndex: 3 });
      updateNewBill();
    }

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
                      src={"http://localhost:8000/UserImage/" + currentUserInfo.customer_img_name}
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
            onClick={btnAutionHistoryOnClick}
          >
            <b>AUTION HISTORY</b>
          </button>
          <button
            id={this.state.viewIndex == 2 ? "btn-fade-in" : "btn-fade-out"}
            onClick={btnBillHistoryOnClick}
          >
            <b>BILL HISTORY</b>
          </button>
          <button
            id={this.state.viewIndex == 3 ? "btn-fade-in" : "btn-fade-out"}
            onClick={btnNewBillOnClick}
          >
            <b>NEW BILL</b>
          </button>
        </div>

        <hr id="user-profile-hr" />
        <div className="container">
          <div
            className={
              this.state.viewIndex == 1 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            <UserAutionHistory currentAutionHistory={currentAutionHistory} />
          </div>
          <div
            className={
              this.state.viewIndex == 2 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            <UserBillHistory currentBillHistory={currentBillHistory} />
          </div>
          <div
            className={
              this.state.viewIndex == 3 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            <UserNewBill currentNewBill={currentNewBill} />
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
import UserNewBill from "./UserNewBill";
export default UserProfile;
