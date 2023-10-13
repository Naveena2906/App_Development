import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import '../Admin/Admin.css'
export const Orders = () => {
  return (
    <div>
      {/* <div className="main d-flex-r"> */}
      <TopBar/>
      <SideBar/>
      {/* <div className="content d-flex-c"><h2>Make Orders</h2></div> */}
      <div style={{marginLeft:"30%",marginTop:"-40%",width:"40%",border:"2px solid black",height:"50vh"}} className='vptable'>
      <table>
        <tr>
          <th>Order</th>
          <th>Customer Name</th>
          <th>Total amount</th>
          <th>Status</th>
          <th>Delivery</th>
        </tr>
      </table>
      </div>
    </div>
    // </div>
  )
}