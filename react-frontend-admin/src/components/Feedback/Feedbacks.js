import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../css/feedback.css";
class Feedbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FeedbackData: [],
      ProductData: [],
      DetailComment: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/producthasfeedback", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          ProductData: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("http://127.0.0.1:8000/api/showfeedback", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          FeedbackData: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const onClick = (e) => {
      let detail = [];
      this.state.FeedbackData.forEach((feedback) => {
        if (feedback.product_id == e.target.value) {
          detail = [...detail, feedback];
        }
      });
      this.setState({ DetailComment: detail });
    };
    return (
      <section>
        <div className="container-fluid">
          <h4 className="mt-4 mb-5">
            <strong>FEEDBACK</strong>
          </h4>
          <div className="row">
            {this.state.ProductData.map((p, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-12 mb-3 ">
                  <div className="card border-bottom-primary">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={
                          "http://localhost:8000/ProductImg/" +
                          p.product_thumbnail_img_name
                        }
                        className="img-fluid"
                        style={{ width: "100%", height: "350px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title mb-3">{p.product_name}</h6>
                      <small>{p.category_name}</small>
                      <button
                        type="button"
                        className="btn btn-outline-primary position-relative float-right"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={onClick}
                        value={p.product_id}
                      >
                        Comment
                        <span className="position-absolute top-0 start-100 translate-middle badge text-white rounded-pill bg-danger">
                          {p.amount}
                        </span>
                        {/* MODAL */}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Comment
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row" >
                  {this.state.DetailComment.map((h, index) => {
                    return (
                      <div className="col-lg-6 col-sm-12" key={index}>
                        <div className="media g-mb-30 media-comment">
                          <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                            <div className="row">
                              <div className="col-9">
                                <div className="g-mb-15">
                                  <h5 className="h5 g-color-gray-dark-v1 mb-0">
                                    {h.customer_name}
                                  </h5>
                                  <span className="g-color-gray-dark-v4 g-font-size-12">
                                    {h.feedback_date}
                                  </span>
                                </div>
                                <p>"{h.feedback_content}"</p>
                              </div>
                              <div className="col-3">
                                <img
                                  className="img-fluid d-flex rounded-circle g-mt-3 g-mr-15"
                                  src={
                                    "http://localhost:8000/UserImage/" +
                                    h.customer_img_name
                                  }
                                  alt="Image Description"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Feedbacks;
