import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import "./Admin.css";
import { useSelector } from "react-redux";
import { getadmin } from "../Redux/Redux";

export const Admin = () => {
  // const { email } = useParams();
   const admin = useSelector(getadmin);
  return (
    <div>
      <TopBar />
      <SideBar />
      <div className="content d-flex-c">
        <h2>WELCOME </h2>
      </div>
    </div>
  );
};
