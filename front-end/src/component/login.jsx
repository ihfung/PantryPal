import React from "react";
import '../style/login.scss';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const LoginForm = () =>{
  return (
    <div className="wrapper">
     <div className="form-container">
      <form action = "">
        <h1>Login</h1>
        <div className="input-box">
          <input type ="text" placeholder="Username" required />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type ="password" placeholder="Password" required />
          <RiLockPasswordFill className="icon"/>
        </div>
        <button type ="submit">Login</button>
        <div className="register-link">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default LoginForm;