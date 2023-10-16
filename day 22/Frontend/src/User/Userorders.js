import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Userorders = () => {
    const navigate=useNavigate();
    const hom=()=>{
        navigate("/user/dashboard");
    }
  return (
    <>
    <div>Userorders</div>
    <button onClick={hom}>Home</button>
    </>
  )
}

export default Userorders