import axios from "axios";

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

export {
  userregister,
  login,
  adminlogin,
  getproductdb,
  addproduct,
  editproduct,
  deleteproduct,
  getproductbyid,
};
