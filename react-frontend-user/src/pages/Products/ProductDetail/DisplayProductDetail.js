import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import DetailItem from "./DetailItem";
import Comment from "./Comment";

const DisplayProductDetail = ({ product, currentFeedback }) => {
  const [verticalState, setVerticalState] = useState(1);

  const verticalTab = (index) => {
    setVerticalState(index);
  };
  // let verticalState = 1;
  // const verticalTab = () => {};
  return (
    <div className="container product-detail-display" style={{ margin: "0px", padding: "0px" }}>
      <div className="product-detail-item-wrapper" style={{ margin: "0px", padding: "0px" }}>
        <div className="container mb-5 product-detail-item-info" style={{ margin: "0px", padding: "0px" }}>
          <DetailItem key={product.product_id} product={product} />
        </div>

        <div className="container mb-5 product-detail-item-more-info" style={{ margin: "0px", padding: "0px" }}>
          <div className="card-box">
            <div className="row">
              <div
                className="col-sm-3"
                style={{ margin: "0px", paddingRight: "0px" }}
              >
                <div
                  className="nav flex-column nav-pills nav-pills-tab"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
          
                >
                  <Link
                    className={
                      verticalState === 1 ? "nav-link active show" : "nav-link"
                    }
                    onClick={() => verticalTab(1)}
                    id="product-information-tab"
                    data-toggle="pill"
                    to="#product-information"
                    role="tab"
                    aria-controls="product-information"
                    aria-selected="true"
                    style={{height: "auto"}}
                  >
                    DETAILS
                  </Link>

                  <Link
                    className={
                      verticalState === 2 ? "nav-link active show" : "nav-link"
                    }
                    onClick={() => verticalTab(2)}
                    id="product-materials-tab"
                    data-toggle="pill"
                    to="#product-materials"
                    role="tab"
                    aria-controls="product-materials"
                    aria-selected="false"
                    style={{height: "auto"}}
                  >
                    MATERIALS
                  </Link>

                  <Link
                    className={
                      verticalState === 3 ? "nav-link active show" : "nav-link"
                    }
                    onClick={() => verticalTab(3)}
                    id="product-storage-instructions-tab"
                    data-toggle="pill"
                    to="#product-storage-instructions"
                    role="tab"
                    aria-controls="product-storage-instructions"
                    aria-selected="false"
                    style={{height: "auto"}}
                  >
                    STORAGE INSTRUCTIONS
                  </Link>
                </div>
              </div>

              <div className="col-sm-9">
                <div className="tab-content pt-0">
                  <div
                    className={verticalState === 1 ? "tab-pane fade active show" : "tab-pane fade"}
                    id="product-information"
                    role="tabpanel"
                    aria-labelledby="product-information-tab"
                  >
                    <span>{product.product_information}</span>
                  </div>

                  <div
                    className={verticalState === 2 ? "tab-pane fade active show" : "tab-pane fade"}
                    role="tabpanel"
                    aria-labelledby="product-materials-tab"
                  >
                    <span>{product.product_ingredients}</span>
                  </div>

                  <div
                    className={verticalState === 3 ? "tab-pane fade active show" : "tab-pane fade"}
                    id="product-storage-instructions"
                    role="tabpanel"
                    aria-labelledby="product-storage-instructions-tab"
                  >
                    <span>{product.product_instruction_store}</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container mb-5 conversation" style={{ margin: "0px", padding: "0px" }}>
          <Comment key={product.product_id} productId={product.product_id} currentFeedback={currentFeedback}/>
        </div>
      </div>
    </div>
  );
};

export default DisplayProductDetail;
