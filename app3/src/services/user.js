import axios from 'axios'

export async function register(firstName, lastName, email, phone, password) {
  // body parameters
  const body = {
    firstName,
    lastName,
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
