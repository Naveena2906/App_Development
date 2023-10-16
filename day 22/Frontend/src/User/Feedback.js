import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addreview, addreviewdb } from '../Service/Api';
import { ToastContainer, toast } from 'react-toastify';
const Feedback = () => {
    const navigate=useNavigate();
    const [rev,setRev]=useState({
        created_at:'',yourcomments:'',rate_your_product:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setRev({...rev,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          console.log(rev);
            const res = await addreviewdb(rev);
            console.log(res.data);
            if (res.data == "Added") {
              toast.success(`Feedback Added Successfully !`);
              setTimeout(() => {
                navigate('/user/review');
              }, 1000)
            }
          }
          catch (error) {
            console.log(error);
          }
      
        }

  return (
    <div style={{marginTop:"15%"}}>
        {/* <form> */}
        {/* <div style={{padding:"2%"}}><input type='text' placeholder='Created at' onChange={handleChange} style={{padding:"1%",width:"14.6%"}} id='created_at' required/></div> */}
        <div style={{padding:"2%"}}><input type='text' placeholder='Your comments' onChange={handleChange} style={{padding:"1%",width:"14.6%"}} id='yourcomments' required/></div>
        <div><input  type='text'placeholder='rate your product' onChange={handleChange} id='rate_your_product'style={{padding:"3%"}}/>
        <div  style={{padding:"2%"}}><button style={{padding:"1%"}} onClick={handleSubmit} >Submit</button></div>
        </div>
        {/* </form> */}
    </div>
  )
}

export default Feedback