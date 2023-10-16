import React, { useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBarUser } from '../Bar/SideBarUser'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
// import { PlusCircle, MinusCircle, Trash } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';   
import "react-toastify/dist/ReactToastify.css";
import { addOrder, decreasequantity, gettocart, increasequantity, removeAllFromCart, removefromcart } from '../Redux/Redux';
const Cart = () => {
  // const{email}=useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const prods=useSelector(gettocart);
 const carts=()=>{

 }
 const del=(product)=>{
  console.log(product);
  
  dispatch(removefromcart(product.pid));
 }
 const handledecrease=(productid)=>{
   dispatch(decreasequantity(productid));
 }
 const handleincreasee=(productid)=>{
   dispatch(increasequantity(productid));
 }
 const totalAmount=prods.reduce((acc,product)=>{
  return acc+product.pprice*product.quantity; 
 },0);
//  const check=(product)=>{
//   console.log(product);
// console.log(`${totalAmount}`);
// const addData={
// product:product,
// totalAmount:`${totalAmount}`
// };
// dispatch(addOrder(addData));
// navigate("/user/purchase")
// }

const check=(prods)=>{
  if (prods.length === 0) {
    toast.error('Your cart is empty. Add items to your cart before checking out.');
  } 
  else {
  navigate("/user/purchase")
  }
}

  return (
    // <div>
    <>
    {/* {totalAmount === 0 ? (
      <div className='cart-empty shadow card'> */}
      {/* <img src={CartSVG} alt="login-img" className='auth-svg' /> */}
      {/* <TopBar/>  
   <SideBarUser/>
      <p style={{marginTop:"20%",marginLeft:"18%",fontSize:"160%"}}>Your cart is empty</p>
      </div>
      ) : ( */}
        <div>
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
        <TopBar/>  
   <SideBarUser/>  
   <div className="flex-container1" >
   {prods.map((product)=>(
     <div className='flex-row2' key={product.pid}>
      <div className="flex-item3" >
       <div className='flexs' >
     {/* <div key={product.id}> */}
       <p>Id:{product.pid}</p>
       <img src={product.pimage}></img>
       <p>Category:{product.pcategory}</p>
       <p>Name:{product.pname}</p>
       <p>Price:{product.pprice}</p>
       <span>
       {/* <button style={{cursor:"pointer"}} onClick={()=>{handledecrease(product.pid)}}>-</button> */}
       <p ><button style={{cursor:"pointer"}} onClick={()=>{handledecrease(product.pid)}} >-</button> {product.quantity} <button style={{cursor:"pointer"}} onClick={()=>{handleincreasee(product.pid)}}>+</button></p>
       {/* <button style={{cursor:"pointer"}} onClick={()=>{handleincreasee(product.pid)}}>+</button> */}
       </span>
       {/* <p onClick={()=>carts(product)} style={{cursor:"pointer"}}>Add to cart</p> */}
       {/* {/* <p onClick={()=>edit(product)} style={{cursor:'pointer',marginLeft:"65%"}}><EditIcon/></p> */}
             <p onClick={()=>del(product)} style={{cursor:'pointer',marginLeft:"87%",marginTop:"-12%"}}><DeleteIcon/></p> 
       </div>
     </div>
 </div>
   // </div>
   ))}
</div>
<h3>Total :  ₹{totalAmount} </h3>
<button onClick={()=>check(prods)} style={{padding:"0.7%",borderRadius:"3%",cursor:"pointer"}} >Checkout</button>
</div>

{/* )} */}
</>
  )}

export default Cart