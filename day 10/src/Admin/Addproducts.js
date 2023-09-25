import React from "react";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "../Redux/Redux";
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import '../Admin/Admin.css';
export const AddProducts = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
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

  const handleSubmit = (e) => {
    // e.preventDefault();
  
    if(id==='')
    {
      toast.error("Id is empty");
    }
    else{

      dispatch(addproduct({ id: id, image:image, category: category, name: name ,price:price,availability:availability}));
      console.log(id, image, category, name, price, availability);
      toast.success("Product added Successfully");
      setTimeout(()=>{
        navigate("/list");
        // navigate("/user");
      },2000);
    }

  };
  return (
    <div>
      <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
      {/* <div className="main d-flex-r"> */}
      <TopBar />
      <SideBar />
      <div className="content d-flex-c" style={{border:"2px solid black",width:"35%",marginLeft:"36%",marginTop:"-40%",height:"60vh"}}>
        <div style={{marginTop:"2%",fontWeight:"700",marginLeft:"-3%"}}>ADD PRODUCTS</div>
        {/* <label>
          {" "}
          ProductId */}
          <div className="aid" style={{padding:"2%"}}>
          <input  placeholder="productid" type="number" onChange={handleId}style={{width:"25%",marginLeft:"-5%"}}  />
        </div>
        {/* </label> */}
        {/* <label>
          {" "}
          Image */}
          <div className="aimage" style={{padding:"1%"}}>
          <input placeholder="image" type="string" onChange={handleImage} style={{width:"25%",marginLeft:"-5%"}} />
         </div>
         {/* </label> */}
        {/* <label>
          {" "}
          Category */}
          <div className="acategory" style={{padding:"1%"}}>
          <input placeholder="category" type="string" onChange={handleCategory}style={{width:"25%",marginLeft:"-5%"}} />
        </div>
        {/* </label> */}
        {/* <label>
          {" "}
          ProductName */}
          <div style={{padding:"1%"}}>
          <input placeholder="product name" type="string" onChange={handleName} style={{width:"25%",marginLeft:"-5%"}}/>
       </div>
        {/* </label> */}
        {/* <label>
          {" "}
          Price */}
          <div style={{padding:"1%"}}>
          <input placeholder="price" type="number" onChange={handlePrice} style={{width:"25%",marginLeft:"-5%"}}/>
        </div>
        {/* </label> */}
        {/* <label>
          {" "}
          Availability */}
          <div style={{padding:"1%"}}>
          <input placeholder="availability" type="number" onChange={handleAvailability} style={{width:"25%",marginLeft:"-5%"}}/>
        </div>
        {/* </label> */}
        <div style={{padding:"3%"}}>
        <label onClick={handleSubmit} style={{marginLeft:"-7\%",border:"1px solid black",width:"12%",cursor:"pointer"}}>SUBMIT</label>
        </div>
      </div>
    </div>
    // </div>
  );
};
