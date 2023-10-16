import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const Userrauth = () => {
    const Token = localStorage.getItem('Token') !== null;
    const Role =  localStorage.getItem('Role') === "USER";

    return (

        Token && Role ? <Outlet /> : <Navigate to='/l' />
    )
}

export default Userrauth