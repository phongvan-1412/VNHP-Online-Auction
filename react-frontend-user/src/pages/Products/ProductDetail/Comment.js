import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

const Comment = ({ productId, currentFeedback }) => {
  const [feedback_content, setFeedbackContent] = useState("");
  const [loading, setLoading] = useState(false);
  const setTime = () => {
    $("#result").text("");
  };
  const onKeyUp = (event) => {
    const feedbackContent = event.target.value;
    const result = $("#result");
    const commentResult = $("#input-text");
    if (event.key === "Enter") {
      if (JSON.parse(localStorage.getItem("customer_info")) == null) {
        result.text("Please login before comment.");
        result.css("color", "red");
        setInterval(setTime, 5000);
        return;
      }

      setFeedbackContent(feedbackContent);
      setLoading(true);
      const product_id = productId;
      const customer_id = JSON.parse(
        localStorage.getItem("customer_info")
      ).customer_id;

      if (customer_id == null) {
        result.text("You have to login first");
      }
      const feedback_date = new Date().toLocaleString();

      const feedback = {
        product_id,
        feedback_content,
        customer_id,
        feedback_date,
      };

      axios
        .post("http://127.0.0.1:8000/api/addcomment", feedback)
        .then(function (response) {
          if (response.data.length > 0) {
            result.text("Your comment just added.");
            result.css("color", "green");
            commentResult.val("");
            setInterval(setTime, 3000);
          } else {
            result.text("Your comment added failed.");
            result.css("color", "red");
          }
          setLoading(false);
        });
    }
  };

  const showComments = (e) => {};

  return (
    <div>
      <div className="conversation-header">
        <div className="col-md-6 conversation-header-right-component">
          <span className="conversation-header-head-text">Conversation</span>
          <span className="conversation-header-sub-text">Comments</span>
        </div>

        <div className="col-md-6 conversation-header-left-component">
          <span>
            <i className="fa-solid fa-user-group meta-usergroup" />
          </span>
          <span className="conversation-header-sub-text"> Viewing</span>
        </div>
      </div>

      <div className="row input-text">
        {loading ? (
          <div className="container">
            <div className="row">
              <div className="justify-content-center">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <input
          id="input-text"
          placeholder="Tell us what you think?"
          cols="30"
          rows="10"
          onKeyUp={onKeyUp}
          disabled={loading}
        />
      </div>

      <div id="result"></div>
      {currentFeedback.map((itemFeedback, index) => {
        return (
          <div className="show-comment" key={index}>
            <div className="customer-avatar">
              <img
                src={require(`../../../../../LaravelAPI/public/UserImage/${itemFeedback.customer_img_name}`)}
              />
            </div>
            <div className="customer-name">{itemFeedback.customer_name}</div>
            <div className="feedback-date">{itemFeedback.feedback_date}</div>
            <div className="feedback-comment">
              {itemFeedback.feedback_content}
            </div>
          </div>
        );
      })}

      <div className="row button-showmore">
        <button className="btn-showmore" onClick={showComments}>
          Show More Comments
        </button>
      </div>
    </div>
  );
};

export default Comment;
