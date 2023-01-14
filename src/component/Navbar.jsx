import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [Nav, SetNav] =useState(false)
  const links=[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    },
  ]
  return (
    <div className="flex justify-between  items-center h-20 w-full text-white bg-black fixed px-4">
       <div>
        <h1 className="text-5xl font-signature ml-2">
          atul
        </h1>
       </div>
       <ul className="hidden md:flex">
        {links.map(({id,link}) => (<li key={id} className="px-4 cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200">{link}</li>))}
       </ul>
       <div onClick={()=> SetNav(!Nav)} 
       className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       {Nav ? <FaTimes size={30} />: <FaBars size={30}/>}
       </div>
       {Nav &&(
       <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 h-screen">
       {links.map(({id,link}) => (<li key={id} className="px-4 py-6 cursor-pointer text-4xl capitalize">{link}</li>
       ))}
    
       </ul>
       )}
    </div>
  );
};

export default Navbar