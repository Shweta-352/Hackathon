import React from "react";
import { useState } from "react";
import { login } from '../services/user'
import "./loginpage.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function LoginUser() {
  // create state members
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigate object
  const navigate = useNavigate()

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      toast.warning('enter email')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else {
      const result = await login(email, password)
      if (result['status'] === 'success') {
        // read the token
        // const token = result['data']['token']
        // const name = result['data']['name']
        const { token, name } = result['data']

        // set the data in session storage
        // sessionStorage.token = token
        // sessionStorage.name = name

        // sessionStorage['token'] = token
        // sessionStorage['name'] = name

        sessionStorage.setItem('token', token)
        sessionStorage.setItem('name', name)

        toast.success('welcome to the application')
        navigate('/Homepage')
      } else {
        toast.error('invalid email or password')
      }
    }
  }

  return (
    <div>
      <h2 className='page-title'>Login</h2>

      <div className='row'>
        <div className='col'></div>

        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Don't have an account yet?{' '}
                <Link to='/register'>Register here</Link>
              </div>
              <button onClick={onLogin} className='mt-2 btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className='col'></div>
      </div>
    </div>
  )
}

export default LoginUser

