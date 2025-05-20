import React from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";

const Menu = () => {
  return (
    <nav className="w-[15%] flex flex-col   h-screen bg-gray-50  px-3 py-6 ">
      <Link
        className="border-[1.5px] mb-2 border-blue-300 active:scale-94 hover:text-blue-500 hover:border-blue-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-sm"
        to="/addProducts"
      >
        Add New Product
      </Link>
      <hr className=" my-2  text-gray-400 " />
      <CategoryFilter />
    </nav>
  );
};

export default Menu;
