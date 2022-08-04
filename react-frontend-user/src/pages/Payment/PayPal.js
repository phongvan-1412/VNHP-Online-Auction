import React ,{useRef,useEffect}from "react";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = ({ totalPayment, billId, newBill }) => {
  const value1 = (totalPayment / 100).toFixed(2);

  // const paypal = useRef();
  // useEffect(() => {
  //   window.paypal
  //     .Buttons({
  //       // Sets up the transaction when a payment button is clicked
  //       createOrder: (data, actions) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               amount: {
  //                 value: value,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       // Finalize the transaction after payer approval
  //       onApprove: async (data, actions) => {
  //         console.log(data);
  //         console.log(actions);
  //         return actions.order.capture().then(function (orderData) {
  //           // Successful capture! For dev/demo purposes:
  //           console.log(
  //             "Capture result",
  //             orderData,
  //             JSON.stringify(orderData, null, 2)
  //           );
  //           // const transaction =
  //           //   orderData.purchase_units[0].payments.captures[0];
  //           // alert(
  //           //   `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
  //           // );
  //           // When ready to go live, remove the alert and show a success message within this page. For example:
  //           // const element = document.getElementById('paypal-button-container');
  //           // element.innerHTML = '<h3>Thank you for your payment!</h3>';
  //           // Or go to another URL:  actions.redirect('thank_you.html');
  //         });
  //       },
  //     })
  //     .render(paypal.current);
  // }, []);

  // return <div id="paypal-button-container" ref={paypal}></div>;
    var self = this;
  return (
    
    <PayPalButton

      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      createOrder={function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency: "USD",
                value: value1,
              },
            },
          ],
        });
      }}

      onSuccess={(details, data) => {
        const orderId = data.orderID;
        const payId = data.payerID;
        const paymentSource = data.paymentSource;
        const payment_mode_date = new Date(new Date().toLocaleString());
        const paymentDetail = {
          billId,
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
        //       newBill();
        //     } else {
        //     }
        //   });
        
      }}
     
      options={{ currency: "USD" }}
    />
  );
  
};

export default PayPal;

