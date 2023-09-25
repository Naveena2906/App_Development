import React, { useState } from "react";
import '../Login/Login1.css';
import { Link, useNavigate } from "react-router-dom";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setadmin } from "../Redux/Redux";
const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Enter all fields");
    }
    //  else if(!email.includes('@'))
    //  {
    //   toast.error("enter correct email");
    //  }
    //   else if(password.length!==8)
    //   {
    //    toast.error("password contains 8 character")
    //   }
    else {
      axios
        .get("http://localhost:8080/get/loginbyemail", {
          params: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          console.log(res.data);
          if(email==='naveena@gmail.com'&& password==='12345678')
          {
            alert("Welcome Admin");

            navigate(`/admin/${email}`);
          }
           else if (res.data === "Login Success") {
            dispatch(
              setadmin({
                email: email,
              })
            );
            toast.success(res.data);
            setTimeout(() => {
              navigate("/user");
            }, 2000);
          } else {
            toast.error(res.data);
          }
        });
    }
  };
  return (
    <div className="ima" style={{backgroundColor:"pink",height:"100vh"}}>
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
      <div className="loginforms">
        <div className="loginform">
          <h2 style={{marginTop:"-5%"}}>LOGIN FORM</h2>
          {/* <label className='log'>Email</label> */}
          <div className="lemail" style={{marginTop:"20%"}}>
            <div className="img2" style={{marginLeft:"5%",marginBottom:"-9%"}}>
              <AttachEmailOutlinedIcon/>
            </div>
            <input
              onChange={handleEmail}
              className="in"
              value={email}
              placeholder="email"
              type="email"
              required
            />
          </div>
          {/* <label className='log'>Password</label> */}
          <div className="lpass" style={{padding:"8%"}}>
            <div className="img2" style={{marginLeft:"1%",marginBottom:"-9%"}}>
              <PasswordOutlinedIcon />
            </div>
            <input
              onChange={handlePassword}
              className="in"
              value={password}
              placeholder="password"
              type="password"
              required
            />
          </div>
          <br></br>
          <div className="llogin" style={{padding:"1%"}}>
            <button onClick={handleSubmit} className="inlog" type="submit">
              Login
            </button>
          </div>
          <div className="lsign">
            <h4>
              New User?
              <Link to="/s" style={{ textDecoration: "none" }}>
                signup
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <div>
        <img src="https://logixgrid.com/wp-content/uploads/2020/02/Cover-1-1-1536x1065.png" style={{width:"40%",marginLeft:"-30%",marginTop:"-19.3%",height:"60vh",backgroundColor:"lightblue",filter:"brightness(80%)",border:"2px solid black"}}/>
      </div>
    </div>
  );
};

export default Login1;
