// import React from 'react'
// //    import { Navbar } from '../Navbar/Navbar';
// import { Navigate, useNavigate, useParams } from 'react-router-dom'
// import { TopBar } from '../Bar/TopBar';
//   import { SideBar } from '../Bar/SideBar';
//   import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//  import '../Admin/Product.css';
//  import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch, useSelector } from 'react-redux';
// import { getproduct,setToUpdate ,removeproduct} from '../Redux/Redux';

// export const Products = () => {
//   const prods=useSelector(getproduct);
//    const{email}=useParams();
//    const navigate=useNavigate();
//   const dispatch=useDispatch();

//   const edit=(product)=>{
//     console.log(product);
//     dispatch(setToUpdate(product));
//     navigate('/update')
//   }
//   const del=(product)=>{
//    console.log(product);
//    dispatch(removeproduct(product.id));
//   }
//   return (
//     <div>
//          <TopBar/>
//         <SideBar/>
//         <div className="flex-container1">
//         {prods.map((product)=>(
//           <div className='flex-row2' key={product.id}>
//            <div className="flex-item3" >
//             <div className='flexs'>
//           {/* <div key={product.id}> */}
//             <p>Id:{product.id}</p>
//             <img src={product.image}></img>
//             <p>Category:{product.category}</p>
//             <p>Product Name:{product.name}</p>
//             <p>Price:{product.price}</p>
//             <p>Availability:{product.availability}</p>
//             <p onClick={()=>edit(product)} style={{cursor:'pointer',marginLeft:"65%"}}><EditIcon/></p>
//                   <p onClick={()=>del(product)} style={{cursor:'pointer',marginLeft:"87%",marginTop:"-12%"}}><DeleteIcon/></p>
//             </div>
//           </div>
//       </div>
//         // </div>
//           ))}

//     </div>
//     </div>
//     )}

import React, { useEffect, useState } from "react";
//    import { Navbar } from '../Navbar/Navbar';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../Admin/Product.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  getproduct,
  setToUpdate,
  removeproduct,
  getadmin,
  addtocart,
} from "../Redux/Redux";
import { deleteproduct, getproductbyname, getproductdb } from "../Service/Api";
import { ToastContainer, toast } from "react-toastify";
import { useStates } from "../States";

export const Products = () => {
  // const prods=useSelector(getproduct);
  const { email } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector(getadmin);
  const {searchvalue,setSearchvalue}=useStates();

  const [prods, setProds] = useState([]);
  const fetchprod = async () => {
    try {
      if(searchvalue==='')
      {
        const response = await getproductdb();
        setProds(response.data);
        console.log(response.data);
      }
      else 
      {
        const response=await getproductbyname(searchvalue);
        setProds(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching ", error);
    }
  };
  useEffect(() => {
    fetchprod();
  }, [searchvalue]);

  const edit = (product) => {
    console.log(product);
    // dispatch(setToUpdate(product));
    navigate(`/admin/update/${product.pid}`);
  };
  const del = async (product) => {
    console.log(product);
    // dispatch(removeproduct(product.id));
    const prodid = product.pid;
    const res = await deleteproduct(prodid);
    console.log(res.data);
    if (res.data === "deleted") {
      toast.success(`${product.pname} deleted  `);
      fetchprod();
    }
    //  console.log(product);
    //  dispatch(removeproduct(product.id));
  };
  const cart = (product) => {
    console.log(product);
    dispatch(addtocart(product));
  };
  //  const image = () => {
  //     navigate("/lists");
  //   };
  return (
    <div className="productViewContainer">
      <TopBar />
      <SideBar />
      <ToastContainer />
      <div className="flex-container1">
        {prods.map((product) => (
          <div className="flex-row2" key={product.pid}>
            <div className="flex-item3">
              <div className="flexs">
                {/* <div key={product.id}> */}
                <p>Id:{product.pid}</p>
                <img src={product.pimage}></img>
                <p>Category:{product.pcategory}</p>
                <p>Product Name:{product.pname}</p>
                <p>Price:{product.pprice}</p>
                <p>Availability:{product.pavailable}</p>
                {/* <p onClick={()=>cart(product)} style={{cursor:"pointer"}}>Add to cart</p> */}
                <p
                  onClick={() => edit(product)}
                  style={{ cursor: "pointer", marginLeft: "65%" }}
                >
                  <EditIcon />
                </p>
                <p
                  onClick={() => del(product)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "87%",
                    marginTop: "-12%",
                  }}
                >
                  <DeleteIcon />
                </p>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
};
{
  /* <div className='circle-container'>
    <div className='arrow' onClick={image}><ArrowForwardIosIcon/></div>
    </div> */
}
{
  /* // </div> */
}
