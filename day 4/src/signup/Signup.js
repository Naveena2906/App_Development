import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { toast, ToastContainer } from 'react-toastify';   
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const Signup = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const Navigate=useNavigate();
    const handleName=(e)=>{
        setName(e.target.value);
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
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name===''||email===''||password==='')
        {
            toast.error("Enter all fields");
        }
    //     else if(!email.includes('@'))
    //     {
    //         toast.error("enter correct email");
    //     }
    //     else if(password.length!==8)
    //    {
    //     toast.error("password contains 8 character")
    //    }
        else
        {
           axios.post("http://localhost:8080/post/signup",
           {
            username:name,
            email:email,
            password:password
           }).then((res)=>{
            console.log(res.data)
            if(res.data==='Signup Successful')
            {
                toast.success(res.data);
                setTimeout(()=>{
                    Navigate("/l")
                },2000);
            }
            else{
                toast.error(res.data);
            }
           })
        }
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
        <div className='sname'>
            <div className='img1'><PersonIcon/></div>
            <input onChange={handleName} className='sign' value={name} placeholder='username' type='text' required/>
        </div>
        <div className='semail'>
            <div className='img1'><AttachEmailOutlinedIcon/></div>
            <input onChange={handleEmail} className='sign' value={email} placeholder='email' type='email' required/>
        </div>
        <div className='spass'>
            <div className='img1'><PasswordOutlinedIcon/></div>
            <input onChange={handlePassword} className='sign' value={password} placeholder='password' type='password'  required/>
        </div>
        <br></br>
        <div className='ssubmit'>
            <button onClick={handleSubmit} className='insign'   type='submit'  required>Signup</button>
        </div>
        <h4>Already existing acount?<Link to='/l' style={{textDecoration:'none'}}>Login</Link></h4>
    </div>
    </div>
    </div>
  )
}

export default Signup