import React, { Component } from "react";
import "../../css/feedback.css";
class Feedback extends Component {
  render() {
    return (
      <>
        <h3>FEEDBACK</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Image Description"
              />
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    5 days ago
                  </span>
                </div>
                <div className="row">
                    <div className="col-9">
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                        scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                        nisi vulputate fringilla. Donec lacinia congue felis in
                        faucibus ras purus odio, vestibulum in vulputate at, tempus
                        viverra turpis.
                        </p>
                    </div>                   
                    <div className="col-3">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Image Description"
                            width={170}
                        />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Feedback;
