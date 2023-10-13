import React, { useEffect, useState } from "react";
import { TopBar } from "../Bar/TopBar";
import { SideBar } from "../Bar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  getToUpdate,
  removeToUpdate,
  updateproduct,
} from "../Redux/Redux";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { editproduct, getproductbyid } from "../Service/Api";
// import '../Admin/Admin.css';
// import { updateproduct } from "../Redux/Redux";
export const UpdateProducts = () => {
  // const product = useSelector(getToUpdate);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [up, setUp] = useState({
    pid: "",
    pimage: "",
    pname: "",
    pcategory: "",
    pprice: "",
    pavailable: "",
  });
  const fetchid = async () => {
    try {
      const product = await getproductbyid(id);
      setUp(product.data);
      console.log(product.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchid();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setUp({ ...up, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (up) => {
    console.log(up);
    const res = await editproduct(up.pid, up);
    console.log(res.data);
    if (res.data === "updated successfully") {
      navigate("/list");
    }
  };
  // dispatch(updateproduct({ id: id, image:image, category: category, name:name ,price:price,availability:availability}));
  // console.log(id, image, category, name, price, availability);
  // navigate("/list");
  // dispatch(removeToUpdate())

  return (
    <div>
      {/* <div className="main d-flex-r"> */}
      <TopBar />
      <SideBar />
      <div
        className="contents d-flex-d"
        style={{
          marginTop: "-36%",
          width: "30%",
          marginLeft: "40%",
          border: "2px solid black",
          padding: "2%",
        }}
      >
        {/* <TopBar/>
          <SideBar/> */}
        <div>UPDATE PRODUCTS</div>
        <div>
          <div style={{ padding: "4%" }}>
            <input
              type="number"
              id="pid"
              placeholder="productId"
              value={up.pid}
            />
          </div>
          <div style={{ padding: "2%" }}>
            <input
              type="string"
              id="pimage"
              placeholder="image"
              value={up.pimage}
              onChange={handleChange}
            />
          </div>
          <div style={{ padding: "2%" }}>
            <input
              type="string"
              id="pcategory"
              placeholder="category"
              value={up.pcategory}
              onChange={handleChange}
            />
          </div>
          <div style={{ padding: "2%" }}>
            <input
              type="string"
              id="pname"
              placeholder="name"
              value={up.pname}
              onChange={handleChange}
            />
          </div>
          <div style={{ padding: "2%" }}>
            <input
              type="number"
              id="pprice"
              placeholder="price"
              value={up.pprice}
              onChange={handleChange}
            />
          </div>
          <div style={{ padding: "2%" }}>
            <input
              type="text"
              id="pavailable"
              placeholder="availability"
              value={up.pavailable}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Button
            onClick={() => handleSubmit(up)}
            style={{
              backgroundColor: "green",
              color: "white",
              marginLeft: "20px",
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};
