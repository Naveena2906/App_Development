

import React from 'react'
//    import { Navbar } from '../Navbar/Navbar';
import { useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
  import { SideBar } from '../Bar/SideBar';
 import '../Admin/Product.css';

export const Products = () => {
   const{email}=useParams();
  return (
    <div>
         <TopBar/>  
        <SideBar/>  
         <div className='row'> 
               <div className='column'>
                     <img src='https://tse3.mm.bing.net/th?id=OIP.nPGcBiMmSBRFk11qF4SqEgHaHa&pid=Api&P=0&h=180'></img>
                     <div className='image-name'>brush</div>
               </div>
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