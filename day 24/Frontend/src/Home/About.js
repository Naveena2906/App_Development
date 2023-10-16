// import React from 'react'

// const About = () => {
//   return (
//     <div>
//     <div style={{width:"30%",marginLeft:"50%",marginTop:"5%"}}>
//       <h3>Golden Grocery is Free business Accounting Software  built for Indian small businesses to deal with invoicing, inventory, accounting needs, and much more! The goal is to make a businessman’s daily routine less tiring and let them focus more on growing their business, less on paperwork.</h3>
//     </div>
//       <div>
//         <h2 style={{marginLeft:"-60%",marginTop:"6%"}}>Who We Are</h2>
//         <p style={{width:"60%",marginLeft:"15%",textAlign:"justify"}}>Golden Grocery is a team of highly skilled professionals with extensive experience in stock management and supply chain optimization. Our experts have worked with businesses of all sizes and across various industries, delivering tailored solutions to meet their unique needs.</p>
//       </div>
//     </div>
//   )
// }

// export default About


import React from 'react';
import "./About.css";
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

const About = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar/>
         <div className='abttp'>AboutUs</div>
         <diV className="abtinfo">
          <p>What Sets Us Apart</p>
          <ul>
            <li><strong>Expertise:</strong> Our team comprises experts with years of experience in inventory management. We stay at the forefront of industry trends to ensure our clients always have access to the latest tools and strategies.</li>
            <li><strong>Innovation:</strong> We are committed to continuous improvement. Our software is built with cutting-edge technology and is designed to evolve with your business.</li>
            <li><strong>Client-Centric Approach:</strong> Your success is our success. We work closely with you to understand your challenges and goals, providing personalized solutions and ongoing support.</li>
          </ul>
         </diV>
         <diV className="abtinfo1">
          <p>Our Services</p>
          <ul>
            <li><strong>Inventory Management Software: </strong> Our robust software is the cornerstone of our solutions. It simplifies tasks such as tracking inventory levels, managing orders, and generating insightful reports.</li>
            <li><strong>Consulting Services: </strong> We offer expert consulting to help you optimize your inventory processes, reduce waste, and enhance efficiency.</li>
            <li><strong>Training and Support:</strong>Our team provides comprehensive training and 24/7 support to ensure you make the most of our software.</li>
          </ul>
         </diV>
         <div className='abtimg'><img src='https://assets-global.website-files.com/63eef15e3ff8fd318e9a6888/647100e8a93d52282e16eb98_Frame%2096288-p-1080.webp' style={{height:"90vh",width:"40%",marginLeft:"-40%",marginTop:"10%"}}/></div>
         <div className='abtimg1'><img src='https://assets-global.website-files.com/63eef15e3ff8fd318e9a6888/647383dc944b04bd3bcc888e_Frame%2096289-p-800.webp' height={700} width={800}/></div>
        <div className='ft'><div className='abtft'>
            <h1>Join Us on the Journey</h1>
            <p>We invite you to join us on this journey toward more efficient, profitable, and sustainable business operations. Whether you're a small startup or a large enterprise, Golden Grocery is here to help you achieve your inventory management goals.</p>
            <div><button className='stbtn1' onClick={()=>navigate("/")}>Start Now</button></div>
         </div>
         </div>
    </div>
  )
}

export default About;