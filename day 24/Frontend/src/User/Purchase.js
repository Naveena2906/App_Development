import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettocart, removeAllFromCart, removefromcart } from '../Redux/Redux';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const prods=useSelector(gettocart);
  const totalAmount=prods.reduce((acc,product)=>{
    return acc+product.pprice*product.quantity; 
   },0);
   const pur=()=>{
    prods.forEach(product => {
      dispatch(removefromcart(product.pid));
    });
    navigate("/user/dashboard");
   }
  return (
    <>
    <h1 style={{marginTop:"15%"}}>
      <h3 style={{marginTop:"5%"}}>Total :  {totalAmount} </h3>
      Purchased
    </h1>
    <button onClick={pur}>success</button>
    </>
  )
}

export default Purchase