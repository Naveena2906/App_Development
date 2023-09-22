

import React from 'react'
//    import { Navbar } from '../Navbar/Navbar';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
  import { SideBar } from '../Bar/SideBar';
 import '../Admin/Product.css';

export const Products = () => {
   const{email}=useParams();
   const navigate=useNavigate();
   const image = () => {
      navigate("/im");
    };
  return (
    <div>
         <TopBar/>  
        <SideBar/>  
         <div className='row'> 
               <div className='column' >
                     <img src='https://tse3.mm.bing.net/th?id=OIP.nPGcBiMmSBRFk11qF4SqEgHaHa&pid=Api&P=0&h=180' ></img>
                     {/* <div className='image-name'>brush</div> */}
               </div>
               {/* <div className='columns'>
                     <p>id</p>
                  <p>name</p>
               </div> */}
               <div className='column1'>
                     <img src='https://tse1.mm.bing.net/th?id=OIP.y9Z1krbGGE_gEPfqcM6XVQHaHa&pid=Api&P=0&h=180'></img>
               </div>
               <div className='column2'>
                     <img src='https://tse4.mm.bing.net/th?id=OIP.uLPEqiLSTBkGyar7hCID2AHaHa&pid=Api&P=0&h=180'></img>
               </div>
        </div>
     </div>
  )
}




const menu=[
      {
            id:1,
            image:"./images/maggi.jpg",
            name:"maggi",
            price:"12",
            description:"tasty"
      },
      {
            id:2,
            image:"./images/maggi.jpg",
            name:"tomato",
            price:"12",
            description:"tasty"
      },
]