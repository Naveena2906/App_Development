
import React, { useEffect, useState } from 'react'
//    import { Navbar } from '../Navbar/Navbar';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { TopBar } from '../Bar/TopBar';
  import { SideBar } from '../Bar/SideBar';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 import '../Admin/Product.css';
 import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct,setToUpdate ,removeproduct, getadmin, addtocart} from '../Redux/Redux';
import { SideBarUser } from '../Bar/SideBarUser';
import { getproductdb ,getproductbyname} from '../Service/Api';
import { useStates } from '../States';
import { toast, ToastContainer } from 'react-toastify';   
import "react-toastify/dist/ReactToastify.css";

export const  Userproduct = () => {
  // const prods=useSelector(getproduct);
  const{email}=useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const admin=useSelector(getadmin);
  const [prods,setProds]=useState([]);
  const {searchvalue} =useStates();
  const fetchprod=async()=>{
    try{
      if(searchvalue==='')
      {
        const response=await getproductdb();
        setProds(response.data);
        console.log(response.data);
      }
      else{
        const response=await getproductbyname(searchvalue);
        setProds(response.data);
        console.log(response.data);
      }
    }
    catch(error){
       console.error('Error fetching ',error);
    }
  }
  useEffect(()=>{
    fetchprod();
  },[searchvalue])

  // const edit=(product)=>{
  //   console.log(product);
  //   dispatch(setToUpdate(product));
  //   navigate('/update')
  // }
  // const del=(product)=>{
  //  console.log(product);
  //  dispatch(removeproduct(product.id));
  // }
  const cart=(product)=>{
    console.log(product);
    dispatch(addtocart(product));
    toast.success("Product added to cart");
    setTimeout(() => {
      navigate('/user/cart');
  }, 1500);

  }
  //  const image = () => {
  //     navigate("/lists");
  //   };
  return (
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
            <p>Product Name:{product.pname}</p>
            <p>Price:{product.pprice}</p>
            <p>Availability:{product.pavailable}</p>
            <button onClick={()=>cart(product)} style={{cursor:"pointer",borderRadius:"2%",padding:"2%"}}>Add to cart</button>
            {/* <p onClick={()=>edit(product)} style={{cursor:'pointer',marginLeft:"65%"}}><EditIcon/></p>
                  <p onClick={()=>del(product)} style={{cursor:'pointer',marginLeft:"87%",marginTop:"-12%"}}><DeleteIcon/></p> */}
            </div>
          </div>
      </div>
        // </div>
          ))}
      {/* <div className="flex-item3">
        <img src="https://tse4.mm.bing.net/th?id=OIP.eRCBh1SeHKhmKewhOUWadwHaHa&pid=Api&P=0&h=180" alt="Image 2" />
        <p>Id:2</p>
        <p>Catgory:Food</p>
        <p>Name:Maggi</p>
        <p>Availability:50 pkt</p>
      </div>
      <div className="flex-item3">
        <img src="https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0&h=180" alt="Image 3" />
        <p>Id:3</p>
        <p>Category:Vegetables</p>
        <p>Name:Carrot</p>
        <p>Availability:30Kg</p>
      </div> */}
      {/* <div className='flex-row2'>
      <div className="flex-item3">
        <img src="https://tse3.mm.bing.net/th?id=OIP.1gu6WWKmjrgtex-tCSoDUQHaLH&pid=Api&P=0&h=180" alt="Image 3" />
        <p>Id:4</p>
        <p>Category:Snacks</p>
        <p>Name:Cake</p>
        <p>Availability:30Kg</p>
      </div>
      <div className="flex-item3">
        <img src="https://media.istockphoto.com/photos/milk-pack-picture-id941410286?k=6&m=941410286&s=170667a&w=0&h=DSO_ROPJDwDpcv43KW_Pk1LyzBt5brEH1WgRMVt8xYE=" alt="Image 3" />
        <p>Id:5</p>
        <p>Category:Vegetables</p>
        <p>Name:Carrot</p>
        <p>Availability:30Kg</p>
      </div>
      <div className="flex-item3">
        <img src="https://tse4.mm.bing.net/th?id=OIP.8cNWwvfJsvMkZzAbNLC58AHaGK&pid=Api&P=0&h=180" alt="Image 3" />
        <p>Id:6</p>
        <p>Category:Vegetables</p>
        <p>Name:Carrot</p>
        <p>Availability:30Kg</p>
      </div>
      </div> */}
      
    </div>
    </div>
    )}
    {/* <div className='circle-container'>
    <div className='arrow' onClick={image}><ArrowForwardIosIcon/></div>
    </div> */}
    {/* // </div> */}
