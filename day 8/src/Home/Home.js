import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Home = () => {
  const navigate=useNavigate();
   const get = () => {
      navigate("/l");
    };
   const privacy = () => {
      navigate("/private");
    };
   const faq = () => {
      navigate("/f");
    };
    const terms=()=>{
      navigate("/t");
    }
  return (
    <div className='landing-page' >
      <div className='lands'>
        <Navbar/> 
        <div className='border'>
          {/* <div className='img11'><img src='https://logixgrid.com/wp-content/uploads/2020/02/Cover-1-1-1536x1065.png'/></div>  */}
       <div className='land' style={{marginTop:"7%",marginRight:"40%",marginLeft:"4%",width:"40%"}}><h1 style={{fontSize:"240%"}}>Inventory Management System</h1></div>
      <div className='land' style={{marginTop:"1%",marginRight:"50%",marginLeft:"4%",width:"40%"}}><h4 style={{fontSize:"110%"}}>By the Wholesalers,For the Wholesalers</h4></div>
      <div style={{marginTop:"3.5%",marginRight:"65%",marginLeft:"4%",width:"40%"}}>With Over two decades of experience in the Wholesalers industry,We at Golden Grocery deeply recognize the challenges being faced by modern Wholesalers</div>
      <div className='image1' style={{marginTop:"-15%",marginLeft:"40%"}}><img src='https://logixgrid.com/wp-content/uploads/2020/02/Cover-1-1-1536x1065.png' style={{width:"60%",height:"60vh"}}alt='Image'/></div>
      <div className='box' onClick={get}>Get Started</div>




      </div>
       </div>
       <div className='buss'><h2>Golden Grocery supports all bussinesses</h2>
       </div>
       <div className="flex-container">
          <div className='flex-row'>
             <div className="flex-item" style={{cursor:"pointer"}}>
                 <h1>Order Management</h1>
                 <h4>Handle all your sales and purchases activities,manage invoices,bills,and track payments.Golden Grocery also helps you monitor packages and shipments to keep your deliveries on time.</h4>
            </div>
             <div className="flex-item" style={{cursor:"pointer"}}>
                 <h1>Warehouse Management</h1>
                 <h4>You can control your stock in different warehouses or godowns centrally from Golden Grocery.Track item movement,transfer items within warehouses,and generate warehouse-specific reports.</h4>
            </div>
             <div className="flex-item" style={{cursor:"pointer"}}>
                 <h1>Inventory Tracking</h1>
                 <h4>You can keep track of spare parts,saleable items,and even expiry dates with the serial and branch tracking feature of Golden Grocery inventory.</h4>
            </div>
         </div>
         <div className='flex-row1'>
             <div className="flex-item1" style={{cursor:"pointer"}}>
                 <h1>Barcode Scanning</h1>
                 <h4>Golden Grocery is compatible with different types of barcode system,and add SKU's ,serial and branch numbers ,and items to sales and purchase orders.</h4>
            </div>
             <div className="flex-item1" style={{cursor:"pointer"}}>
                 <h1>Reports</h1>
                 <h4>Know your inventory aging,vendor payments,sales details and inventory valuation from a range of reports which can be generated ,downloaded and shared easily.</h4>
            </div>
         </div>
         <br></br>
         </div>
         <div style={{border:"2px solid black",width:"99.8%",height:"43vh"}}><h1 style={{marginLeft:"-31%"}}>Manage and fulfill orders on the go</h1>
         <div><h2 style={{width:"48%",marginLeft:"10%"}}>Stay connected and get reat-time updates on the order status,no matter where you are.</h2></div>
         <div className='img1'  ><img src='	https://www.zoho.com/inventory/mobile/appstore.svg' style={{cursor:"pointer"}} /></div>
         <div className='img2' ><img src='	https://www.zoho.com/inventory/mobile/playstore-badge.svg' style={{cursor:"pointer"}} /></div>
         <div><img src='https://www.zoho.com/inventory/images/in-images/mobile-app-so-2x.png' style={{width:"22%",height:"42vh",marginTop:"-14.5%",marginLeft:"40%"}}/></div>
         </div>
         <div style={{backgroundColor:"black",border:"2px solid black",height:"25vh"}}>
<h2 style={{color:"white",marginLeft:"-60%"}}>Contact with Us</h2>        
         <div style={{width:"6%",color:"white",marginLeft:"13%",cursor:"pointer"}}><Link to={'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1'} style={{color:"white"}}><InstagramIcon/></Link></div>
         <div style={{width:"6%",color:"white",marginLeft:"15%",marginTop:"-1.8%",cursor:"pointer"}}><Link to={'https://www.facebook.com/login.php'} style={{color:"white"}}><FacebookIcon/></Link></div>
         <div style={{width:"6%",color:"white",marginLeft:"17%",marginTop:"-1.8%",cursor:"pointer"}}><Link to={'https://twitter.com/i/flow/login'} style={{color:"white"}}><TwitterIcon/></Link></div>
         <div style={{color:"white",marginTop:"-2.7%",marginLeft:"10%",cursor:"pointer"}} onClick={privacy}>Privacy Policy</div>
         <div style={{color:"white",marginTop:"-1.5%",marginLeft:"18.6%"}}>|</div>
         <div style={{color:"white",marginTop:"-1.4%",marginLeft:"30%",cursor:"pointer"}} onClick={terms}>Terms and Condition</div>
         <div style={{color:"white",marginTop:"-1.5%",marginLeft:"43%"}}>|</div>
         <div style={{color:"white",marginLeft:"48%",marginTop:"-1.3%",cursor:"pointer"}} onClick={faq}>FAQ's</div>
         </div>
      </div>

  )
}