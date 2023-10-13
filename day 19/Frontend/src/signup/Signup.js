import React, { useState } from 'react';
import '../signup/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { toast, ToastContainer } from 'react-toastify';   
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { userregister } from '../Service/Api';
const Signup = () => {
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[mobilenum,setMobilenum]=useState('');
    const role="USER";
    const Navigate=useNavigate();
    const handleName=(e)=>{
        setUsername(e.target.value);
        console.log(e.target.value);
    };
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    };
    const handleMobilenum=(e)=>{
        setMobilenum(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await userregister({username,email,password,role,mobilenum});
        console.log(res.data);
        Navigate('/l');
        // if(username===''||email===''||password===''||mobilenum==='')
        // {
        //     toast.error("Enter all fields");
        // }
    //     else if(!email.includes('@'))
    //     {
    //         toast.error("enter correct email");
    //     }
    //     else if(password.length!==8)
    //    {
    //     toast.error("password contains 8 character")
    //    }
        // else
        // {
        //    axios.post("http://localhost:8080/post/signup",
        //    {
        //     username:username,
        //     email:email,
        //     password:password
        //    }).then((res)=>{
        //     console.log(res.data)
        //     if(res.data==='Signup Successful')
        //     {
        //         toast.success(res.data);
        //         setTimeout(()=>{
        //             Navigate("/l")
        //         },2000);
        //     }
        //     else{
        //         toast.error(res.data);
        //     }
        //    })
        // }
    };
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
        <div className='signupforms'>
    <div className='signupform'>
            <h2>SIGN UP FORM </h2>
        <div className='sname'>
            <div className='img1' style={{marginLeft:"19%",marginBottom:"-8%",padding:"1%"}}><PersonIcon/></div>
            <input onChange={handleName} className='sign' value={username} placeholder='username' type='text' required/>
        </div>
        <div className='semail' style={{padding:"2%"}}>
            <div className='img1' style={{marginLeft:"19%",marginBottom:"-8%",padding:"1%"}}><AttachEmailOutlinedIcon/></div>
            <input onChange={handleEmail} className='sign' value={email} placeholder='email' type='email' required/>
        </div>
        <div className='spass' style={{padding:"2%"}}>
            <div className='img1' style={{marginLeft:"19%",marginBottom:"-8%",padding:"1%"}}><PasswordOutlinedIcon/></div>
            <input onChange={handlePassword} className='sign' value={password} placeholder='password' type='password'  required/>
        </div>
        <div className='spass' style={{padding:"2%"}}>
            <div className='img1' style={{marginLeft:"19%",marginBottom:"-8%",padding:"1%"}}><PasswordOutlinedIcon/></div>
            <input onChange={handleMobilenum} className='sign' value={mobilenum} placeholder='Mobilenum' type='number'  required/>
        </div>
        <br></br>
        <div className='ssubmit' style={{padding:"1%"}}>
            <button onClick={handleSubmit} className='insign'   type='submit'  required>Signup</button>
        </div>
        <h4>Already existing acount?<Link to='/l' style={{textDecoration:'none'}}>Login</Link></h4>
    </div>
    <img src="https://logixgrid.com/wp-content/uploads/2020/02/Cover-1-1-1536x1065.png" style={{width:"100%",marginLeft:"-200%",marginTop:"-120%",height:"61.6vh",marginBottom:"4%",backgroundColor:"lightblue",filter:"brightness(80%)",border:"2px solid black"}}/>
    </div>
    </div>
  )
}

export default Signup