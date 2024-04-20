import React from "react";
import { useState } from "react";
import { FaUser, FaLock,FaPhone} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function Register() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const navigate = useNavigate();

  const RegisterUser = async () => {
    if(email.length===0){
        toast.warning('Enter valid email')
    }
    else if(password.length===0){
        toast.warning('Enter password')
    }
  }

  return (
    <div className="row">
      
      <div className="col">
        <form action="">
          <h1 className="title mt-5">Register User</h1>

          <div className="input-box mt-3">
            <input
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
              placeholder="First name"
              className="form-control"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box mt-3">
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="type"
              placeholder="Last Name"
              className="form-control"
              required
            />
            <FaUser className="icon" />
          </div>
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
                setphoneNumber(e.target.value);
              }}
              type="tel"
              placeholder="Phone Number"
              className="form-control"
              required
            />
            <FaPhone className="icon" />
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
              Already registered?<Link to="/Loginpage">Login here</Link>
            </h6>
          </div>
          <div>
          <button onClick={RegisterUser} type="submit" className="btn btn-success mt-3">
            Login
          </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Register;
