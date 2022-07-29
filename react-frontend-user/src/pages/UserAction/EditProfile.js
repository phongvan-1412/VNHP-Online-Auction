import React from "react";
import $ from "jquery";
import axios from "axios";

function EditProfile({ currentUserInfo, updateUserLogin }) {
  const changePassword = () => {};

  const saveChangeProfile = () => {
    const customer_name = $("#editfullname").val();
    const customer_email = $("#editemail").val();
    const customer_address = $("#editaddress").val();
    const customer_contact = $("#editcontact").val();
    const customer_dob = $("#editdateofbirth").val();

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
          alert('Something wrong in server');
        } else {
          localStorage.removeItem("customer_info");
          localStorage.setItem("customer_info", JSON.stringify(response.data));
          updateUserLogin();
          window.location.href = "http://localhost:3000/userprofile";
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
                <input className="form-control" id="editfullname" type="text" />
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
                  <input className="form-control" id="editcontact" type="tel" />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="dateofbirth">
                    Birthday
                  </label>
                  <input
                    className="form-control"
                    id="editdateofbirth"
                    type="date"
                  />
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
