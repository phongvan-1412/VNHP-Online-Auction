import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class ChangePassword extends Component {
  state = { loading: false };

  render() {
    const { currentAdminInfo, UpdateAdminLogin } = this.props;
    const CheckPwd = () => {
      const password = $("#newpwd").val();
      const confirmPassword = $("#confirmpwd").val();
      if (password == confirmPassword) {
        $("#alert")
          .html("Passwords match.")
          .addClass("text-success")
          .removeClass("text-danger");
      } else {
        $("#alert")
          .html("Passwords do not match!")
          .addClass("text-danger")
          .removeClass("text-success");
      }
    };
    const ChangePass = () => {
      this.setState({ loading: true });
      const Email = $("#currentemail").val();
      const CurrentPassword = $("#currentpwd").val();
      const ConfirmPassword = $("#confirmpwd").val();
      const self = this;
      console.log(Email);
      if (!CurrentPassword) {
        $("#alert").html("Current password is require").addClass("text-danger");
        self.setState({ loading: false });
      } else {
        const Data = { Email, CurrentPassword, ConfirmPassword };
        axios
          .post("http://127.0.0.1:8000/api/changepassword", Data)
          .then(function (response) {
            if (response.data == 0) {
              $("#result-pwd")
                .text("Wrong current password")
                .addClass("alert alert-danger")
                .removeClass("alert-success");
              self.setState({ loading: false });

            } else {
              $("#result-pwd")
                .text("Success to change password")
                .addClass("alert alert-success")
                .removeClass("alert-danger");
                localStorage.removeItem("admin_info");
                localStorage.setItem("admin_info", JSON.stringify(response.data));
                self.setState({ loading: false });
                UpdateAdminLogin();
            }
          });
      }
    };
    const { loading } = this.state;
    return (
      <div
        id="con-close-modal"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Change Password</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div id="result-pwd"></div>
            <div className="modal-body p-4">
              <div className="form-group">
                <label className="small mb-1" htmlFor="currentpwd">
                  * Current Password
                </label>
                <input
                  className="form-control"
                  id="currentpwd"
                  type="password"
                />
                <input
                  className="form-control"
                  defaultValue={currentAdminInfo.emp_email}
                  id="currentemail"
                  type="text"
                  hidden
                />
              </div>
              <div className="form-group">
                <label className="small mb-1" htmlFor="newpwd">
                  * New Password
                </label>
                <input
                  className="form-control"
                  id="newpwd"
                  type="password"
                  onKeyUp={CheckPwd}
                />
              </div>
              <div className="form-group">
                <label className="small mb-1" htmlFor="confirmpwd">
                  * Confirm New Password
                </label>
                <input
                  className="form-control"
                  id="confirmpwd"
                  onKeyUp={CheckPwd}
                  type="password"
                />
                <div id="alert"></div>
              </div>
              <div>
                <button
                  className="btn btn-primary mt-4"
                  id="changepwd-btn"
                  onClick={ChangePass}
                  disabled={loading}
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  {!loading && <span>Save</span>}
                  {loading && <span> Loading...</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChangePassword;
