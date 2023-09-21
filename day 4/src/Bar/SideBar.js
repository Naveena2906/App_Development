 import React from 'react'
 import './SideBar.css';
 import { useNavigate } from 'react-router-dom';
 import CategoryIcon from '@mui/icons-material/Category';
 import AddIcon from '@mui/icons-material/Add';
 export const SideBar = () => {
   const navigate=useNavigate();
   const text =() =>{
     navigate("/add")
   }
   const pro =() =>{
     navigate("/list")
   }
   const up =() =>{
     navigate("/update")
   }
   const rep =() =>{
     navigate("/report")
   }
   return (
     <div className='sidebar d-flex-c'>
         <button >Dashboard</button>
         <button onClick={pro}>Products</button>
        {/* <button><div className='cat'> <CategoryIcon/></div> Categories</button> */}
         <button onClick={text}><div className='cat'> <AddIcon/></div> Add Products</button>
         <button onClick={up}>Update Products</button>
         <button>Inventory</button>
         <button onClick={rep}>Reports</button>
         <button>Orders</button>
     </div>
     
   )
 }





