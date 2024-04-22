import axios from 'axios'
//import config from '../config'

export async function register(Name, email, phone, password) {
  // body parameters
  const body = {
    Name,
    email,
    phone,
    password,
  }

  // make API call
  const response = await axios.post(`http://localhost:4000/user/register`, body)

  

  // read JSON data (response)
  return response.data
}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(`http://localhost:4000/user/login`, body)

  // read JSON data (response)
  return response.data
}

export async function add(title, content) {
  // body parameters
  const body = {
    title,
    content,
  }

  // make API call
  const response = await axios.post(`http://localhost:4000/user/add`, body)

  // read JSON data (response)
  return response.data
}
