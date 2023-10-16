import axios from "axios";
import Feedback from "../User/Feedback";

let jwtToken = localStorage.getItem("Token");
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken);
const headers = {
  Authorization: authheader,
  "Content-Type": "application/json",
};

const URI = "http://localhost:8080";

const login = (logdata) => axios.post(`${URI}/auth/login`, logdata);
const adminlogin = (logdata) => axios.post(`${URI}/auth/login`, logdata);
const userregister = (register) => axios.post(`${URI}/auth/signup`, register);

const getproductdb = () => axios.get(`${URI}/auth/getproduct`);
const getproductbyid = (pid) => axios.get(`${URI}/auth/getproduct/${pid}`, pid);
const addproduct = (prod) =>axios.post(`${URI}/auth/postproduct`, prod, { headers });
const editproduct = (pid, prod) =>axios.put(`${URI}/auth/update/${pid}`, prod, { headers });
const deleteproduct = (pid) =>axios.delete(`${URI}/auth/deleteproduct/${pid}`, { headers });

const getproductbyname=(pname)=> axios.get(`${URI}/auth/getproductname/${pname}`,{headers})
const getproductbycategory=(pcategory)=> axios.get(`${URI}/auth/getproductcategory/${pcategory}`,{headers})
const addreviewdb=(res)=>axios.post(`${URI}/auth/postreview`,res,{headers});
const getfeedback=()=>axios.get(`${URI}/auth/getreview`,{headers});
const deletereviewdb=(rid)=>axios.delete(`${URI}/auth/deletereview/${rid}`,{headers});

const addOrder=(order)=> axios.post(`${URI}/order/add`,order,{headers})
const getUserOrders = (id) =>axios.get(`${URI}/order/get/${id}`,{headers})

// -> dashboard
const getUserCount = () => axios.get(`${URI}/user/getCount`, { headers })
const getProductCount = () => axios.get(`${URI}/product/getCount`, { headers })
const getOrderCount = ()=> axios.get(`${URI}/order/getCount`, { headers })

 
export {
  userregister,
  login,
  adminlogin,
  getproductdb,
  addproduct,
  editproduct,
  deleteproduct,
  getproductbyid,
  addreviewdb,
  getfeedback,
  deletereviewdb,
  getproductbyname,
  getproductbycategory,
  addOrder,
  getUserOrders,
  getUserCount,
  getProductCount,
  getOrderCount,
};
