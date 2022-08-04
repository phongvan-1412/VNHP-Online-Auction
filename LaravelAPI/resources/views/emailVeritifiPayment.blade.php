<div style="width: 600px; margin: 0 auto">
    <div style="text-align:center">
        <h3>Hi {{$newCustomer->customer_name}}</h3>
        <h3>Your account is: {{$newCustomer->customer_email}}</h3>
        <p>Congratulation.</p>
        <p>Your has win bidding product: {{$productItem->product_name}}</p>
        <p>Please confirm your payment as link below:</p>
        <p>
            <a href="{{route('product.payment', ['customer_id'=>$newCustomer->customer_id, 'product_id'=>$productItem->product_id,'payment'=>$productItem->product_price_aution])}}" style="display:inline-block; background: green; color: #fff; padding: 7px 25px; font-weight:bold">Confirm Payment</a>
        </p>
    </div>
    <h3>Thanks, the VNHP team</h3>
</div>
