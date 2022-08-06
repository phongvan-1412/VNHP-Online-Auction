import React, { useRef, useEffect } from "react";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";

import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = ({ currentBill }) => {
  const test = (currentBill.aution_price / 1000).toFixed(2);
  const redirectToHome = () => {
    window.location.href = "http://localhost:3000";
  }
  return (
    <div>
      <PayPalButton
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        createOrder={function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency: "USD",
                  value: test,
                },
              },
            ],
          });
        }}
        onApprove={(actions, data) => {
          const orderId = actions.orderID;
          const payId = actions.payerID;
          const paymentSource = actions.paymentSource;
          const payment_mode_date = new Date(new Date().toLocaleString());
          const paymentDetail = {
            billId: currentBill.bill_id,
            orderId,
            payId,
            paymentSource,
            payment_mode_date,
          };

          axios
            .post(`http://127.0.0.1:8000/api/paybill`, paymentDetail)
            .then(function (response) {
                $('#payment-result').text("Payment successfully.Redirect to Home.");
                $('#payment-result').css('color','green')
                setInterval(redirectToHome,10000)
            });
        }}
        // onSuccess={(details, data) => {
        //   const orderId = data.orderID;
        //   const payId = data.payerID;
        //   const paymentSource = data.paymentSource;
        //   const payment_mode_date = new Date(new Date().toLocaleString());
        //   const paymentDetail = {
        //     billId:currentBill.bill_id,
        //     orderId,
        //     payId,
        //     paymentSource,
        //     payment_mode_date,
        //   };
        //   console.log(paymentDetail)

        //   // axios
        //   //   .post(`http://127.0.0.1:8000/api/paybill`, paymentDetail)
        //   //   .then(function (response) {
        //   //     console.log(response.data);
        //   //     if (response.data > 0) {
        //   //       newBill();
        //   //     } else {
        //   //     }
        //   //   });

        // }}

        options={{ currency: "USD" }}
      />
      <div id="payment-result"></div>
    </div>
  );
};

export default PayPal;
