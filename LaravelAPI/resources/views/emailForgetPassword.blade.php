<div style="width: 600px; margin: 0 auto">
    <div style="text-align:center">
        <h2>Hi {{$customer->customer_name}}</h2>
        <h3>Your account is: {{$customer->customer_email}}</h3>
        <p>You recently requested to reset the password for your {{$customer->customer_name}} account.</p>
        <p>Your new password is: {{$customer->customer_pwd}}</p>

    </div>
    <h3>Thanks, the VNHP team</h3>
</div>
