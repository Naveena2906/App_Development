import React from 'react';
import '../Bar/TopBar.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';
import { Profile } from '../Admin/Profile';

// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Button } from '@mui/material';
export const TopBar = () => {

   const [isOpen,setIsOpen]=useState(false);
   const dropdown =() =>{
     setIsOpen(!isOpen);
     
   }
  return (
    <div className="topbar d-flex-r">
      <div className='topicon'><LocalGroceryStoreIcon style={{fontSize:'40px'}} /></div>
        <div className='topname' ><h4 >Golden Grocery</h4></div>
        <input type='text' placeholder='Search'className='topsearch' style={{marginLeft:'20px',width:'15vw',height:'5vh',borderRadius:'5px',border:'none'}}></input>
        <div className='topsicon'><SearchIcon style={{fontSize:'25px'}}/></div>
          <div className='topendicon' onClick={dropdown} ><PersonOutlineIcon  style={{fontSize:'40px'}} /></div>
          <Profile Open={isOpen} onclose={dropdown}/>
    </div>
  )
}