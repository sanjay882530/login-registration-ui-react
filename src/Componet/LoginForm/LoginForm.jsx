import React from 'react'
import { FaLock, FaUser } from "react-icons/fa";
import "./LoginForm.css";
import "./RegistrationForm";
const LoginForm = () => {
  return (
    <div className='wrapperForm'>  
     <form action=''>
        <h1>Login Here</h1>
        <div className='input-form'>
        <FaUser className='icon'/>
      <input  type='text' placeholder='username'></input>
     
        </div>
        <div className='input-form'>
        <FaLock className='icon'/>
      <input  type='password' placeholder='password'></input>
     
        </div>
        <div className='rember-me'>
            <label><input type='checkbox'/>Rember me</label>
            <a href='#'>Forget Password?</a>
        </div>

        <button type='submit'>Login</button>
        <div className='register-me'>
            <p>Don't have an accout?<a href="/RegistrationForm">Register here</a></p>
        </div>
     </form>
    </div>
  )
}

export default LoginForm
