import React, { useState } from 'react'
import {studentsData} from '../utils/mockData.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/authSlice'


const Signin = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submitHandler(e){
    e.preventDefault();
    console.log("inside submit handler")
    console.log("printing env password : ", import.meta.env.VITE_JOHN_PASSWORD)

    // checks, weather std exist or not
    const user = studentsData.find(
      (std)=> (
        std.email === userName && String(std.password) == password
        
      )
    )

    
    console.log(user, "this is the user")

    if(user){
      dispatch(login(user));
      console.log(user);
      navigate('/dashboard');
    }
    else{
      setError("invalid credentials, check again !!");
      console.log("invlid")
      
    }
    


  }

  return (
    <div>
        <h1>form</h1>
        <form
        onSubmit={(e)=>{submitHandler(e)}}>

          <input
            type='email'
            placeholder='email'
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <input 
            type='password'
            placeholder='password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button type="submit">Sign In</button>

        </form>
    </div>
  )
}

export default Signin


