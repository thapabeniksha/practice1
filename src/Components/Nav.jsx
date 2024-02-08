import React,{useState} from 'react';
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';

const Nav = () => {
  const[nav,setNav]= useState(false)
  const handleNav=()=>{
    setNav(nav);
  };
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
      <div className="fixed w-auto  bg-white/90 flex dlex-col justify-center items-center z-20">
          <a href="main" className="w-[75%] h-10 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={35} />
            <span className="pl-4">Home</span>
          </a>
        </div>
    </div>
  )
}

export default Nav
