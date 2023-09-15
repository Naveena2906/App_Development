import React, { useState } from 'react';
import './Login1.css';
import { Link, useNavigate } from 'react-router-dom';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { toast, ToastContainer } from 'react-toastify';   
import "react-toastify/dist/ReactToastify.css";
const Login1 = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleEmail=(e)=>{
   setEmail(e.target.value);
   console.log(e.target.value);
  };
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    console.log(e.target.value);
   };
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(email===''||password==='')
   {
    toast.error("Enter all fields");
   }
    else{

     navigate("/h");
   }

 }
  return (
    <div className='image'> 
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='loginforms'>
    <div className='loginform'>
            {/* <label className='log'>Email</label> */}
            <div className='lemail'>
            <div className='img2'><AttachEmailOutlinedIcon/></div>
            <input onChange={handleEmail} className='in' value={email} placeholder='email' type="email" required/>
            </div>
            {/* <label className='log'>Password</label> */}
            <div className='lpass'>
            <div className='img2'><PasswordOutlinedIcon/></div>
            <input onChange={handlePassword} className='in' value={password} placeholder='password' type='password' required/>
            </div>
              <br></br>
            <div className='llogin'>
             <button onClick={handleSubmit} className='inlog' type='submit'>Login</button>
            </div>
            <div className='lsign'>
              <h4>New User?<Link to='/s' style={{textDecoration:'none'}}>signup</Link></h4>
            </div>
    </div>
     </div>
     </div>
  )
}

export default Login1