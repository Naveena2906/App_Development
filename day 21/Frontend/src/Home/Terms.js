import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import "./Terms.css";

const Terms = () => {
  return (
    <div>
        <Navbar />
        <div >
        <div className='head'>
            <h1>Terms and Condition</h1>
        </div>
        <div className='terms'>
           <div className='terms1' > <ul>
                <li>Please read the following terms and conditions very carefully as your use of our services is subject to your acceptance of and compliance with the following terms and conditions .By accessing this web</li>
                <li>By accessing this website or application and using any of our services you agree that you have read, understood and are bound by the Terms.</li>
                <li>We reserve the right to change the terms and conditions of these Terms from time to time except as required by law and it is your responsibility to look through them as often as possible.</li>
                <li>The Platform, and services may be software that is accessible through the internet or a software that is downloaded to your computer, phone, tablet, or other mobile device and you agree that we may automatically update this software, and that these Terms will apply to such updates. Please read these Terms carefully, and contact us if you have any questions. By using our Services, you agree to be bound by these Terms, including the policies referenced in these Terms.</li>
            </ul>
            </div>
            <div className='terms2'style={{width:"80%",marginLeft:"10%"}}>
            <ol>
                <strong>Acceptance of Terms</strong>
                <ul>
                    <li style={{textAlign:"left"}}>By accessing or using Golden Grocery, you agree to abide by these Terms and Conditions. If you do not agree with these terms, please refrain from using the Software.</li>
                </ul>
                <strong>License</strong>
                <ul>
                    <li style={{textAlign:"left"}}> Golden Grocery grants you a limited, non-exclusive, non-transferable license to use the Software for its intended purpose, subject to these Terms and Conditions.</li>
                    <li style={{textAlign:"left"}}>You may not sublicense, sell, lease, or otherwise transfer your rights to use the Software to any third party.</li>
                </ul>
                <strong>User Accounts</strong>
                <ul>
                    <li style={{textAlign:"left"}}>To use certain features of the Software, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account.</li>
                    <li style={{textAlign:"left"}}>You agree to provide accurate and up-to-date information during the registration process and to promptly update any changes to your information.</li>
                </ul>
                <strong> Privacy Policy</strong>
                <ul>
                    <li style={{textAlign:"left"}}>Your use of the Software is also governed by our Privacy Policy, which can be found at [Link to Privacy Policy]. By using the Software, you consent to the practices described in the Privacy Policy.</li>
                </ul>
              <strong>Payment and Fees</strong>
                <ul>
                    <li style={{textAlign:"left"}}> Certain features or services within the Software may require payment of fees. You agree to pay all applicable fees as described on our website or within the Software.</li>
                </ul>
                <strong> Intellectual Property</strong>
                <ul>
                    <li style={{textAlign:"left"}}> Golden Grocery retains all rights, title, and interest in and to the Software, including all intellectual property rights.</li>
                </ul>
                 <strong>Restrictions</strong>
                <ol style={{textAlign:"left"}}>You may not:</ol>
                <ul>
                    <li style={{textAlign:"left"}}>Use the Software for any illegal or unauthorized purpose.</li>
                    <li style={{textAlign:"left"}}>Modify, adapt, or hack the Software.</li>
                    <li style={{textAlign:"left"}}>Attempt to gain unauthorized access to the Software or its related systems.</li>
                    <li style={{textAlign:"left"}}>Reverse engineer, decompile, or disassemble the Software.</li>
                </ul>
                <strong>ermination</strong>
                <ul>
                    <li style={{textAlign:"left"}}> Golden Grocery reserves the right to suspend or terminate your access to the Software at its discretion, with or without notice, if you violate these Terms and Conditions.</li>
                </ul>
                <strong>Limitation of Liability</strong>
                <ul><li style={{textAlign:"left"}}> To the extent permitted by law, Golden Grocery shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the Software.</li></ul>
                Changes to Terms and Conditions
                <ul>
                    <li style={{textAlign:"left"}}> Golden Grocery reserves the right to modify or revise these Terms and Conditions at any time. Continued use of the Software after such modifications shall constitute your consent to the changes.</li>
                </ul>
                <strong>Governing Law</strong>
                <ul>
                    <li style={{textAlign:"left"}}> These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</li>
                </ul>
                <strong> Contact Information</strong>
                <ul>
                  <li style={{textAlign:"left"}}>If you have any questions or concerns about these Terms and Conditions, please contact us at [Your Contact Email].</li>
                  <li style={{textAlign:"left"}}>By using [Your Inventory Management Software], you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</li>
                </ul>
            </ol>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Terms;