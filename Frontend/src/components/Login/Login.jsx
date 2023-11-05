import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const page=props.page;
    const navigate = useNavigate();
  
    function sendToSignup() {
        if(props.for==='user')
        {
            navigate("/usersignup");
        }
        else 
        {
            navigate("/vendorregistration");
        }
    }
    function sendToLogin() {
      navigate("/userlogin");
    }
    function sendToUser() {
        navigate("/user")
    }
    // const page="signUp";
    //set page according to our need either login or signUp
    return (
        <div className='container'>
        <div className='loginContainer'>
            <div className='left'style={page==='login'?{}:{display:"none"}}>
            </div>
            <div className='right'>
                <h3>{page==='login'?"Hello Again !":"Get Started"}</h3>
                <form>
                    <div style={page==='login'?{display:"none"}:{ }} className='inputField'>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' id='name' />
                    </div>
                    <div className='inputField'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' />
                    </div>
                    <div className='inputField'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <p style={page==='login'?{}:{display:"none"}}><strong>Forget Password ?</strong></p>
                    <button  onClick={sendToUser}>{page==='login'?"Login":"Signup"}</button>
                    <h6>{page==='login'?"Dont’t have an account yet ?":"Already have an account ?"} <span onClick={page==='login'?sendToSignup:sendToLogin}>{page==='login'?"Sign Up":"Login"}</span>
                    </h6>
                </form>
                {props.for==='user'&&<>
                <div className='or'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button><img src={require("../../images/google.png")} alt="google"/>{page==='login'?"Login":"Sign Up"} with Google</button>
                </>
                }
            </div>
            <div className='left' style={page==='login'?{display:"none"}:{ }}>

            </div>
        </div>
        </div>
    )
}

export default Login
