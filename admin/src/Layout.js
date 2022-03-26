import React from 'react';
import menulist from "./menuConfig.json"
// import { useEffect, useState } from "react";
// import Interweave from "interweave";
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='layout'>
            <div className="sideNav">
                <SideBar menu={menulist}></SideBar>
            </div>
            <Outlet/>
        </div>
        );
}
