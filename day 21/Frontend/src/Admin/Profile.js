import React from 'react'
import '../Admin/Product.css';
import { useNavigate } from 'react-router-dom';
export const Profile= ({Open,onClose}) => {
  const navigate=useNavigate();
  const log=()=>{
    navigate("/l");
  }
  if(!Open)
  return null;
  return (
    <div className='profiles'>
    {/* <div className='img1'><img src='https://cdn.onlinewebfonts.com/svg/img_65700.png'/></div> */}
      <div className="Profile-dropdown" style={{cursor:"pointer",border:"1px solid black",width:"90%",marginLeft:"7%",marginTop:"10%",borderRadius:"60%"}} >Update Profile
        </div>
      <div className="Profile-dropdown" onClick={log} style={{cursor:"pointer",border:"1px solid black",width:"60%",marginLeft:"15%",marginTop:"10%",borderRadius:"60%"}} >Logout
        </div>
      </div>
  )
}




