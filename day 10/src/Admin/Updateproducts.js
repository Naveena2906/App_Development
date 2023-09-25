import React, { useState } from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getToUpdate, removeToUpdate, updateproduct } from "../Redux/Redux";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
// import '../Admin/Admin.css';
// import { updateproduct } from "../Redux/Redux";
export const UpdateProducts = () => {
  const product = useSelector(getToUpdate);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(product.id);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(product.category);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [availability, setAvailability] = useState(product.availability);
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleAvailability = (e) => {
    setAvailability(e.target.value);
  };
  const handleSubmit=(e)=>{
    dispatch(updateproduct({ id: id, image:image, category: category, name:name ,price:price,availability:availability}));
    console.log(id, image, category, name, price, availability);
    navigate("/list");
    dispatch(removeToUpdate())
  }
  return (
    <div>
      {/* <div className="main d-flex-r"> */}
      <TopBar/>
      <SideBar/>
      <div className="contents d-flex-d" style={{marginTop:"-36%",width:"30%",marginLeft:"40%",border:"2px solid black",padding:"2%"}}>
          {/* <TopBar/>
          <SideBar/> */}
          <div>UPDATE PRODUCTS</div>
          <div >
          <div style={{padding:"4%"}}><input type='number' placeholder='productId' value={id}  onChange={handleId} /></div>
          <div style={{padding:"2%"}}><input type='string' placeholder='image'   value={image} onChange={handleImage}/></div>
          <div style={{padding:"2%"}}><input type='string' placeholder='category'  value={category}  onChange={handleCategory}/></div>
          <div style={{padding:"2%"}}><input type='string' placeholder='name'  value={name} onChange={handleName}/></div>
          <div style={{padding:"2%"}}><input type='number' placeholder='price'  value={price} onChange={handlePrice}/></div>
          <div style={{padding:"2%"}}><input type='number' placeholder='availability' id="availability" value={availability} onChange={handleAvailability}/></div>
          </div>
          <div>
          <Button onClick={handleSubmit} style={{backgroundColor:'green',color:'white',marginLeft:'20px'}}>Update</Button>
          </div>
        </div>
    </div>
   
  )
}