import React from 'react'
import NavBar from '../Page/NavBar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

  return (
    <div>
        <NavBar/>
        <Outlet/>
     
    </div>
  )
}

export default AppLayout
