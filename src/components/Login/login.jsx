import React, { useState} from 'react'
import './login.css'
// import {store} from '../context/AuthContext'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
// import Cookies from 'js-cookie';
// import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
//   const {login, error,token, setSuccessMsg} = useContext(store)
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()
//   const tokenCookie = Cookies.get('token')
  // useEffect(() =>{
  //   if(tokenCookie){
  //     navigate('/')
  //   }
  // })
  // const showToast = () => {
  //   toast(successMsg, {
  //     position: toast.POSITION.TOP_CENTER
  //   })
  // }
  // useEffect(()=>{showToast()},[successMsg])
  // showToast()
  const handleSubmit = async(e) => {
    console.log('called')
    e.preventDefault()
//    const loginPayload = {
//     username:username,
//     password:password
//    }
//    const url = "https://olzl8wq71i.execute-api.ap-south-1.amazonaws.com/prod/user-registration"
//    const options = {
//     method:'POST',
//     body:JSON.stringify(loginPayload),
//     headers:{"Content-Type": "application/json;" }
//    }
//    await fetch(url, options).then((res) => {
//     console.log('res', res)
//    })
//    await axios.post(url, loginPayload
   
//    ).then((res) => {
//        console.log('res', res)
//     if(res.status === 200){
//         navigate('/')
//     }
//    })
// e.preventDefault()
// const loginPayload = {username: username,password: password}
try{
    const url = 'https://olzl8wq71i.execute-api.ap-south-1.amazonaws.com/prod/user-registration'
    const response = await axios.post(url,{
        username:username,
        password:password
       })
    const data = await response.data
    console.log('data', data)
    if (response.status === 200) {
      console.log("okay",data)  
      navigate('/')
    } 
  }catch(err){
    console.log(err)

  }
  
  }


  return (
  <>
   <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1 className='heading'>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <div className='label'>
            <label>Email</label>
            </div>
            <input
              className='input'
              required
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="field">
          <div className='label'>
            <label>Password</label>
            </div>
            <input
              className='input'
              required
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {error && <p className ='err-msg'>Invalid Credentials</p> } */}
          <div className='btn-field'>
          <button className="loginbutton" type='submit'>Submit</button>
          </div>
        </div>
      {/* <div>
        <p>Don't have an account? <Link className='tag' to="/register">Sign up</Link></p>
      </div> */}
      </form>
    </div>
    {/* <ToastContainer /> */}
  </>
   
  )
}

export default Login
