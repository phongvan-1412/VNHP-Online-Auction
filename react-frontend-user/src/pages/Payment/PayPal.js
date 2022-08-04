import React, { useRef, useEffect } from "react";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = ({ currentBill }) => {
  const test = (currentBill.aution_price / 1000).toFixed(2);
  return (
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
      onSuccess={(details, data) => {
        console.log(data)

        const orderId = data.orderID;
        const payId = data.payerID;
        const paymentSource = data.paymentSource;
        const payment_mode_date = new Date(new Date().toLocaleString());
        const paymentDetail = {
          billId : currentBill.bill_id,
          orderId,
          payId,
          paymentSource,
          payment_mode_date,
        };
        // axios
        //   .post(`http://127.0.0.1:8000/api/paybill`, paymentDetail)
        //   .then(function (response) {
        //     console.log(response.data);
        //     if (response.data > 0) {
        //     } else {
        //     }
        //   });
      }}
      
      options={{ currency: "USD" }}
    />
  );
};

export default PayPal;
