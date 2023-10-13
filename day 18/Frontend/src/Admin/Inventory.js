import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'

export const Inventory = () => {
  return (
    <div>
      {/* <div className="main d-flex-r"> */}
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-c"><h2>Inventory Dashboard</h2></div>
    </div>
    // </div>
  )
}