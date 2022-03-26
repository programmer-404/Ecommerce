import React from 'react';
import SidebarElement from './SidebarElement';
// import { useEffect } from "react";

export default function SideBar(props) {
    // useEffect(() => {
    //   console.log("menuBar",props.menu);
    // }, []);
    
  return (
    <ul className='sidebarUl'>
      {
        props.menu.map((element)=>{
            return(
            <SidebarElement menuItem={element} />
            )
        })
      }
    </ul>
  );
}
