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
export const SideBar = () => {
  const navigate = useNavigate();
  const admin = useSelector(getadmin);
  const text = () => {
    navigate("/add");
  };
  const pro = () => {
    navigate("/list");
  };
  const up = () => {
    navigate("/update");
  };
  const rep = () => {
    navigate("/report");
  };
  const feed = () => {
    navigate("/userview/review");
  };
  const ord = () => {
    navigate("/userview/order");
  };
  const dash = () => {
    navigate("/userview/dashboard");
  };
  return (
    <div className="sidebar d-flex-c">
      <button onClick={() => { navigate(`/admin/${admin.email}`);}}>
        <div className="cat" >
          <DashboardIcon />
        </div>
        Dashboard
      </button>
      <button onClick={pro} >
        <div className="cat">
          <CategoryIcon />
        </div>
        Products
      </button>
      {/* <button><div className='cat'> <CategoryIcon/></div> Categories</button> */}
      <button onClick={text}>
        <div className="cat">
          {" "}
          <AddIcon />
        </div>{" "}
        Add Products
      </button>
      <button onClick={up}>
        <div className="cat1">
          {" "}
          <UpdateIcon />
        </div>
        Update Products
      </button>
      <button onClick={feed}>
        <div className="cat"><InventoryIcon /></div> Feedback
      </button>
      <button onClick={rep}>
        <div className="cat">
          <ReportIcon />
        </div>
        Reports
      </button>
      {/* <button onClick={dash}>
        <div className="cat">
          <ReportIcon />
        </div>
        Dashboard
      </button> */}
      <button onClick={ord}>Orders</button>
    </div>
  );
};
