import { useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import Axios from "axios";

function Signin() {
    const [username, setUsername] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const navigate = useNavigate()

    const [message, setMessage] = useState('')

    function collectName(event) {
        console.log(event.target.value);
        setUsername(event.target.value)
      }

      function collectPassword(event) {
        console.log(event.target.value);
        setUserpassword(event.target.value)
      }

      function userLogins() {
        Axios.post("http://localhost:2025/signin", {
          username,  userpassword
        })
        .then((output) => {
          console.log(output)
          console.log(output.data.msg)
          if (output.data.msg == "Login successful") {
            navigate('/wish')
            console.log(output.data.msg)
          }
          else{
            navigate('/signin')
            console.log(output.data.msg)
            setMessage(output.data.msg)
            // window.onload.href = '/signin'
          }
        })
        .catch(err => console.log(err));
        console.log("done")
      }

  return (
    <>
    <pre style={{color: "crimson", fontSize: "19px", padding: "3px"}}>{message}</pre>
    <h1 className='text-center fs-3 fw-semibold'>Signin</h1>
    
    <div class="mb-3 form-check">
    <label class="form-check-label" for="exampleCheck1">Name</label>
    <input name='username' type="text" class="form-control" id="exampleCheck1" onChange={collectName}/>
  </div>

    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name='userpassword' type="password" class="form-control" id="exampleInputPassword1" onChange={collectPassword}/>
  </div>

  <button class="btn btn-secondary" type="button" onClick={userLogins}>Login</button>
    </>
  )
}

export default Signin

// https://outlier.ai/coding/front-end-en-in?utm_medium=paid&pod=coders&domain=tier_2_coder&locale=IN&language=EN&utm_content=MSG+%7C+Jean+%7C+English+%7C+en-IN+%7C+Financial+%7C+V2+%7C+LP+Swapped&utm_campaign=Scale+%7C+LinkedIn+%7C+Coders+%7C+Tier+2+Coders+%7C+en-IN+%7C+EN*+%7C+IN+%7C+Front+End+Developers+%7C+EN+%7C+Message+Ad+%7C+03%2F27%2F2025&li_fat_id=0fe2150a-7be9-4cb5-89be-8ff7d4c4b38e&campaign_id=386345576&utm_source=linkedin&ad_id=674341833
