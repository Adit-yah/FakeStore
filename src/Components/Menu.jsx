import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import {  RiAddFill,  RiMenu3Fill } from "@remixicon/react";

const Menu = () => {
  const [isopen, setisopen] = useState(false)
 
  console.log('re-render');

  return (
    <nav  className=" " >
      <div 
      className="md:hidden w-full  bg-white h-[50px] flex justify-between items-center px-5 py-3">
        <h1 className="text-xl">FakeStore</h1>
        <RiMenu3Fill
         onClick={()=>setisopen(!isopen)}
        
         className="RIMenu"/>
      </div>

    <div
     className={` 
     transform transition-transform duration-300 ease-in-out 
     ${ isopen ? 'translate-x-0' : 'translate-x-full '}  
     md:translate-x-0
     md:w-[24vw] md:max-w-[210px]  md:static md:flex 
     absolute  top-0 right-0 z-10
     flex-col  h-screen bg-gray-50 py-2 px-3  md:px-3 md:py-6 `}>
      <div className="flex mb-5  justify-end md:hidden">
        <RiAddFill 
        onClick={()=>setisopen(!isopen)}
        className={`rotate-45 cursor-pointer aspect-square h-[30px] text-gray-600 `}/>
      </div>
      <Link
        className="border-[1.5px] mb-2 border-blue-300 active:scale-94 hover:text-blue-500 hover:border-blue-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-sm"
        to="/addProducts"
      >
        Add New Product
      </Link>
      <hr className=" my-4  text-gray-400 " />
      <CategoryFilter />
    </div>
    </nav>
  );
};

export default React.memo(Menu);
