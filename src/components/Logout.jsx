import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/authSlice';

const Logout = () => {

    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{
            dispatch(logout())
        }}>LOGOUT</button>
    </div>
  )
}

export default Logout