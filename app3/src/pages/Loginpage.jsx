import React from "react";
import { useState } from "react";
import { login } from '../services/user'
import "./loginpage.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/register");
  };

  const Login = async () => {
    if(email.length===0){
        toast.warning('Enter valid email')
    }
    else if(password.length===0){
        toast.warning('Enter password')
    }
    else{
      const result = await Login(email,password)
      if(result['status'] === 'success'){
        const {token,name} = result['data']

        sessionStorage.token = token

        sessionStorage.name = name

        toast.success('login Successful')
        navigate('/home')
      }
      else{
        toast.error('invalid credentials')
      }
    }
  };

  return (
    <div className="row">
      
      <div className="col">
        <form action="">
          <h1 className="title mt-5">Login</h1>

          <div className="input-box mt-3">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              
              type="email"
              placeholder="email ID"
              className="form-control"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box mt-3">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="form-control"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="smt mt-3">
            <h6>
              Not registered yet?<Link to="/register">Register here</Link>
            </h6>
          </div>
          <div className="m-4">
          <button onClick={Login} type="submit" className="btn btn-success btn-lg mt-3">
            Sign in
          </button>
          <button onClick={handleClick} style={{float: "right"}} type="" className="btn btn-primary btn-lg mt-3">
              Sign up
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
