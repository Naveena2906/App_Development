import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { TopBar } from '../Bar/TopBar'
import { useNavigate } from 'react-router-dom'

const User = () => {
     const navigate=useNavigate();
    const click=()=>{
        navigate("/user");
    }
  return (
    <div>
       <TopBar/>
       <div style={{color:"black",marginTop:"7%",marginLeft:"-60%",fontWeight:"700",cursor:"pointer"}} onClick={click}>
        viewproduct
       </div>
       <div style={{color:"black",marginTop:"-1.4%",marginLeft:"-40%",fontWeight:"700"}}>
        Cart
       </div>
       
    </div>
  )
}

export default User