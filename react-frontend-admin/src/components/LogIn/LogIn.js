import React, { Component } from 'react'
import "../../css/login.css"
import $ from "jquery"
import axios from 'axios';
import "../../css/all.min.css"

class LogIn extends Component{
    render(){
        function returnDashboard() {
            window.location.href = "http://localhost:3000";
          }
        function login(){
            const email = $('#email').val();
            const pwd = $('#pwd').val();
            const admin = {email, pwd}

            axios.post("http://127.0.0.1:8000/api/login", admin)
            .then(function(response){
                if(response.data == 0){
                    $('#msg').text('Wrong email or password').addClass('text-danger'); 
                }else if(response.data.length > 0){
                    localStorage.setItem(
                        "admin",
                        JSON.stringify(response.data)
                    );
                    setInterval(returnDashboard, 3000);
                }
            })
        };
        return (
            <div className="container">
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-xl-10 col-lg-12 col-md-9">      
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">ADMIN</h1>
                                            </div>
                                            <div className="user m-3">
                                                <div className="form-group mt-4">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="email" aria-describedby="emailHelp"
                                                        placeholder="Email..."/>
                                                </div>
                                                <div className="form-group mt-4">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="pwd" placeholder="Password..."/>
                                                <span id='msg'></span>

                                                </div>

                                                <a onClick={login} className=" mt-4 btn btn-primary btn-user ">
                                                    Login
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
        
            </div> 
        )
    }
}
export default LogIn    
