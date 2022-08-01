import React, { useState } from "react";
import PayPal from "../Payment/PayPal";

const PayPals = ({ newBill }) => {
    const currentNewBill = newBill.filter(
        (nb) => nb.customer_id == currentUserInfo.customer_id
      );
    return(
        <div className="container">
            <h1>PAYMENT GATEWAY</h1>
        <PayPal totalPayment={totalPayment} paymentId={paymentId} />
    </div>
    )
}

export default PayPals;