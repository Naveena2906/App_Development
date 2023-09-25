import React from 'react'
import '../Admin/Product.css';
import { useNavigate } from 'react-router-dom';
export const Profile= ({Open,onClose}) => {
  const navigate=useNavigate();
  if(!Open)
  return null;
  return (
    <div className='profiles'>
    {/* <div className='img1'><img src='https://cdn.onlinewebfonts.com/svg/img_65700.png'/></div> */}
      <div className="Profile-dropdown">Update Profile
        </div>
      <div className="Profile-dropdown">Logout
        </div>
      </div>
  )
}




