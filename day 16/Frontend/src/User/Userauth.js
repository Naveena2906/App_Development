import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const Userauth = () => {
    const Token = localStorage.getItem('Token') !== null;
    const Role =  localStorage.getItem('Role') === "USER";

    return (

        Token && Role ? <Outlet /> : <Navigate to='/l' />
    )
};