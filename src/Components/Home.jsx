import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Home = () => {
  return (
    <div id="main">
    <img className="w-full h-screen  object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="/"></img>
    <div className="w-full h-screen absolute top-0 left-0 bg-white/50">  <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Beniksha Thapa</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a 
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer',
        2000,
        'Coder',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', paddingLeft: "5px" }}
      repeat={Infinity}
    />
             </h2>
             <div className="flex justify-between pt-6 max-w-[200px] w-full">
                <FaTwitter  className="cursor-pinter" size={20}/>
                <FaFacebook className="cursor-pinter" size={20}/> 
                <FaInstagram className="cursor-pinter" size={20}/> 
                <FaLinkedinIn className="cursor-pinter" size={20}/> 
             </div>
    </div></div>
  
    </div>
  )
}

export default Home
