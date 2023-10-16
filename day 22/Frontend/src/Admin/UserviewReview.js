import React, {useEffect, useState } from 'react'
import { deletereviewdb, getfeedback } from '../Service/Api';
import { TopBar } from '../Bar/TopBar';
import { SideBarUser } from '../Bar/SideBarUser';
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import '../User/Reviews.css';
import { SideBar } from '../Bar/SideBar';
const Reviews = () => {
    const [revs, setRevs] = useState([]);
    const fetchrevs = async () => {
        try {
          const response = await getfeedback();
          setRevs(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching ", error);
        }
      };
      useEffect(() => {
        fetchrevs();
      }, []);
  return (
    <div >
    <TopBar />
    <SideBar />
    <ToastContainer />
    <table className='data-table' style={{marginLeft:"30%",marginTop:"10%"}}>
            <thead className='data-table-thead shadow' >
              <tr>
                <th>
                   ID
                </th>
                <th>
                  created_at
                </th>
                <th>
                  Comments
                </th>
                <th>
                  Products rate
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {revs.map((reviews) => (
                <tr key={reviews.rid}>
                  <td>{reviews.rid}</td>
                  <td>{reviews.createdAt}</td>
                  <td>{reviews.yourcomments}</td>
                  {/* <td>Rate Your Experience</td> */}
                  <td>{reviews.rate_your_product}</td>
                </tr>
              ))}
            </tbody>
          </table>
    {/* <div className="reviews">
      {revs.map((reviews) => (
        <div className="review" key={reviews.rid}>
          <div className="review">
              <p>Id:{reviews.rid}</p>
              <p>created_at:{reviews.createdAt}</p>
              <p>yourcomments:{reviews.yourcomments}</p>
              <p>rate_your_product:{reviews.rate_your_product}</p>
              <p onClick={() => del(reviews)}><DeleteIcon/></p>
              {/* <p onClick={()=>cart(product)} style={{cursor:"pointer"}}>Add to cart</p> */}
            </div>
  //         </div>

  //     ))}
  //   </div> */}
  // </div>
  )
}

export default Reviews