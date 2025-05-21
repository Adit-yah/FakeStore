import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import {  RiAddFill,  RiMenu3Fill } from "@remixicon/react";
import { productContext } from "../Utils/Context";

const Menu = () => {
  const { isOpen , setIsOpen} = useContext(productContext)


  return (
    <nav  className=" " >
    <div
     className={` 
     transform transition-transform  duration-300 ease-in-out 
     ${ isOpen ? 'translate-x-0 opacity-100'  : 'translate-x-full opacity-0'}  
     md:translate-x-0 md:opacity-100
     md:w-[24vw] md:max-w-[210px]  md:static md:flex 
     absolute  top-0 right-0 z-10
     flex-col  h-screen bg-gray-50 py-2 px-3  md:px-3 md:py-6 `}>
      <div className="flex mb-5  justify-end md:hidden">
        <RiAddFill 
        onClick={()=>setIsOpen(!isOpen)}
        className={`rotate-45 cursor-pointer aspect-square h-[30px] text-gray-600 `}/>
      </div>
      <Link
        className="border-[1.5px] mb-2 border-blue-300 active:scale-94 hover:text-blue-500 hover:border-blue-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-sm"
        to="/FakeStore/addProducts"
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
