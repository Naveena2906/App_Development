import React from "react";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addproduct } from "../Redux/Redux";
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { addproduct } from "../Service/Api";
// import '../Admin/Admin.css';
export const AddProducts = () => {
  const dispatch = useDispatch();
  // const admin=useSelector(getAdmin);
  const navigate=useNavigate();
  const [addprod,setAddprod]=useState({
    pid:'',pimage:'',pname:'',pprice:'',pcategory:'',pavailable:''
  });
  const handleChange=(e)=>{
    e.preventDefault();
    setAddprod({...addprod,[e.target.id]:e.target.value});
  }
  // const [id, setId] = useState("");
  // const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [availability, setAvailability] = useState("");
  // const handleId = (e) => {
  //   setId(e.target.value);
  // };
  // const handleImage = (e) => {
  //   setImage(e.target.value);
  // };
  // const handleCategory = (e) => {
  //   setCategory(e.target.value);
  // };
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handlePrice = (e) => {
  //   setPrice(e.target.value);
  // };
  // const handleAvailability = (e) => {
  //   setAvailability(e.target.value);
  // };

  const handleSubmit=async(e)=>{
   const prod=await addproduct(addprod);
      console.log(prod.data);
      toast.success("product added");
      setTimeout(()=>{
        navigate('/list')
      },2000);
      // dispatch(addproduct({ id: id, image:image, category: category, name: name ,price:price,availability:availability}));
      // console.log(id, image, category, name, price, availability);
      // toast.success("Product added Successfully");
      // setTimeout(()=>{
      //   navigate("/list");
      //   // navigate("/user");
      // },2000);
    // }

  };
  return (
    <div >
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
  <div>
    zsdxtrfcytvuygbihojk
    </div>
      {/* <div className="main d-flex-r"> */}
      <TopBar />
      <SideBar />
      <div className="content d-flex-c" style={{border:"2px solid black",padding:"1%",width:"35%",marginLeft:"36%",marginTop:"10%",height:"60vh",backgroundColor:"skyblue"}}>
        <div style={{marginTop:"2%",fontWeight:"700",marginLeft:"-3%",padding:"3%"}}>ADD PRODUCTS</div>
        {/* <label>
          {" "}
          ProductId */}
          {/* <div className="aid" style={{padding:"2%"}}>
          <input  placeholder="productid" type="number" onChange={handle}style={{width:"25%",marginLeft:"-5%"}}  />
        </div> */}
        {/* </label> */}
        {/* <label>
          {" "}
          Image */} 
          <div className="aimage" style={{padding:"1%"}}>
          <input placeholder="image" type="string" id="pimage" onChange={handleChange} style={{width:"25%",marginLeft:"-5%",padding:"1.5%"}} />
         </div>
         {/*4</label> */}
        {/* <label>
          {" "}
          Category */}
          <div className="acategory" style={{padding:"1%"}}>
          <input placeholder="category" type="string" id="pcategory" onChange={handleChange}style={{width:"25%",marginLeft:"-5%",padding:"1.5%"}} />
        </div>
        {/* </label> */}
        {/* <label>
          {" "}
          ProductName */}
          <div style={{padding:"1%"}}>
          <input placeholder="product name" type="string"id="pname" onChange={handleChange} style={{width:"25%",marginLeft:"-5%",padding:"1.5%"}}/>
       </div>
        {/* </label> */}
        {/* <label>
          {" "}
          Price */}
          <div style={{padding:"1%"}}>
          <input placeholder="price" type="number" id="pprice" onChange={handleChange} style={{width:"25%",marginLeft:"-5%",padding:"1.5%"}}/>
        </div>
        {/* </label> */}
        {/* <label>
          {" "}
          Availability */}
          <div style={{padding:"1%"}}>
          <input placeholder="availability" type="text"id="pavailable" onChange={handleChange} style={{width:"25%",marginLeft:"-5%",padding:"1.5%"}}/>
        </div>
        {/* </label> */}
        <div style={{padding:"3%"}}>
        <button onClick={handleSubmit} style={{marginLeft:"-7%",backgroundColor:"lightgreen",border:"1px solid black",width:"12%",cursor:"pointer",borderRadius:"6%",padding:"1.3%"}}>SUBMIT</button>
        </div>
      </div>
    </div>
    // </div>
  );
};
