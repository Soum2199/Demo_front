// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom'

function Login() {
const [username, setUsername] = useState('')
const [useremail, setUseremail] = useState('')
const [userpassword, setUserpassword] = useState('')
const [userconfirmpassword, setUserconfirmpassword] = useState('')
const navigate = useNavigate()

  const [message, setMessage] = useState('')

  function collectName(event) {
    console.log(event.target.value);
    setUsername(event.target.value)
  }
  function collectEmail(event) {
    setUseremail(event.target.value)
  }
  function collectPassword(event) {
    console.log(event.target.value);
    setUserpassword(event.target.value)
  }
  function collectConfirmPassword(event) {
    setUserconfirmpassword(event.target.value)
  }

  function userRegistry() {
    Axios.post("http://localhost:2025/login", {
      username, useremail, userpassword, userconfirmpassword
    })
    .then((output) => {
      console.log(output)
      console.log(output.data.msg)
      console.log(output.status)

      if (output.data.msg == "Successfully registered") {
        navigate('/wish')
      }
      else{
        navigate('/login')
        console.log(output.data.msg)
        setMessage(output.data.msg)
        console.log("Passsword didnt match")
      }
    })
    .catch(err => console.log(err));
    console.log("done")
  }
  return (
    <>
    {/* <form method='post'> */}
    <abbr style={{color: "crimson", fontSize: "19px", padding: "3px"}}>{message}</abbr>
    <div class="mb-3 form-check">
    <label class="form-check-label" for="exampleCheck1">Name</label>
    <input name='username' type="text" class="form-control" id="exampleCheck1" onChange={collectName}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name='useremail' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={collectEmail}/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name='userpassword' type="password" class="form-control" id="exampleInputPassword1" onChange={collectPassword}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input name='userconfirmpassword' type="password" class="form-control" id="exampleInputPassword1" onChange={collectConfirmPassword}/>
  </div>
  
  <button type="submit" class="btn btn-outline-primary" onClick={userRegistry}>Register</button>
{/* </form> */}
    </>
  )
}

export default Login