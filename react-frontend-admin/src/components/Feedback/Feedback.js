import React, { Component } from "react";
import "../../css/feedback.css";
class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FeedbackData: [],
    };
  }
  componentDidMount() {
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
    return (
      <>
        <h3>FEEDBACK</h3>
        <div className="row">
          {this.state.FeedbackData.map((p, index) => {
            return (
              <div className="col-lg-6 col-sm-12" key={index}>
                <div className="media g-mb-30 media-comment">
                  <img
                    className="d-flex g-width-50 g-height-50 auto rounded-circle g-mt-3 g-mr-15"
                    src={
                      "http://localhost:8000/UserImage/" + p.customer_img_name
                    }
                    alt="Image Description"
                  />
                  <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="row">
                      <div className="col-9">
                    <div className="g-mb-15">
                      <h5 className="h5 g-color-gray-dark-v1 mb-0">
                        {p.customer_name}
                      </h5>
                      <span className="g-color-gray-dark-v4 g-font-size-12">
                        {p.feedback_date}
                      </span>
                    </div>
                        <p>"{p.feedback_content}"</p>
                      </div>
                      <div className="col-3">
                        <img
                          src={
                            "http://localhost:8000/ProductImg/" +
                            p.product_thumbnail_img_name
                          }
                          alt="Image Description"
                          className="img-fluid"
                          width="150" height="140"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Feedback;
