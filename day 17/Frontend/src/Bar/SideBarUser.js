import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "react-redux";
import { getadmin } from "../Redux/Redux";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportIcon from "@mui/icons-material/Report";
import UpdateIcon from "@mui/icons-material/Update";
export const SideBarUser = () => {
  const navigate = useNavigate();
  const admin = useSelector(getadmin);
  const userpro = () => {
    navigate("/userview");
  };
  const usercart = () => {
    navigate("/user/cart");
  };
//   const ord = () => {
//     navigate("/order");
//   };
  return (
    <div className="sidebar d-flex-c">
      <button onClick={() => { navigate(`/user/dashboard`);}}>
        <div className="cat" >
          <DashboardIcon />
        </div>
        Dashboard
      </button>
      <button onClick={userpro} >
        <div className="cat">
          <CategoryIcon />
        </div>
        Products
      </button>
      <button onClick={usercart} >
        <div className="cat">
          <CategoryIcon />
        </div>
        Cart
      </button>
      {/* <button><div className='cat'> <CategoryIcon/></div> Categories</button> */}
      {/* <button onClick={text}>
        <div className="cat">
          <AddIcon />
        </div>
        cart
      </button> */}
      
      {/* <button onClick={ord}>Orders</button> */}
    </div>
  );
};
