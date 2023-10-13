import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { TopBar } from '../Bar/TopBar'
import { useNavigate } from 'react-router-dom'
import { SideBarUser } from '../Bar/SideBarUser'
const User = () => {
     const navigate=useNavigate();
     const use=()=>{
      navigate('/userview');
     }
    // const click=()=>{
    //     navigate("/user");
    // }
    // const carts=()=>{
    //     navigate("/cart");
    // }
  return (
    <div>
       <TopBar/>
       <SideBarUser/>
       <div>
        <h3 style={{marginTop:"-30%",marginLeft:"10%"}}>Welcome ,Purchase your favourite things!</h3>
       </div>
       {/* <div style={{color:"black",marginTop:"7%",marginLeft:"-60%",fontWeight:"700",cursor:"pointer"}} onClick={use}>
      products
       </div>
       <div style={{color:"black",marginTop:"-1.4%",marginLeft:"-40%",fontWeight:"700",cursor:"pointer"}} >
        Cart
       </div> */}
       
    </div>
  )
}

export default User