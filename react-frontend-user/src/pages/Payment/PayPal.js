import React, { useRef, useEffect } from 'react';

const PayPal = ({totalPayment}) => {
    const paypal = useRef();
    const value = (totalPayment/1000).toFixed(2);
    useEffect(()=>{
        window.paypal.Buttons({
            
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: value
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await (actions.order.capture())
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current);
    }, [])

    return (
    <div ref={paypal}></div>
    )
}


export default PayPal;

