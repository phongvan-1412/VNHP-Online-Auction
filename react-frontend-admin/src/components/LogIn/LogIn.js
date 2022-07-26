import React, { Component } from 'react'
import "../../css/login.css"
import $ from "jquery"
import axios from 'axios';

class LogIn extends Component{
    render(){
        function login(){
            const email = $('#email').val();
            const pwd = $('#pwd').val();
            const admin = {email, pwd}

            axios.post("http://127.0.0.1:8000/api/login", admin)
            .then(function(response){
                if(response.data.length < 1){
                    $('#msg').text('Wrong email or password').addClass('text-danger'); 
                }else{
                    localStorage.setItem(
                        "admin",
                        JSON.stringify(response.data)
                    );
                    window.location.href ='http://localhost:3000/';
                }
            })
        };
        return (
            <div className="login-box">
                <h2>ADMIN</h2>
                <div>
                    <span id="msg"></span>
                    <div className="user-box">
                        <input type="text" id="email" placeholder='email' required/>
                    </div>
                    <div className="user-box">
                        <input type="password" id="pwd" placeholder='password' required/>
                    </div>
                    <button onClick={login} className='btn btn-secondary mt-2' to="#">
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}
export default LogIn    

