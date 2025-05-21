import React, { useContext, useMemo, useState, } from "react";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../Utils/Context";


const CategoryFilter = () => {
  const {products } = useContext(productContext);
  function color() {
    return `rgb(
     ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)}
     )`
  } 
 
    const categories = (products ?? []).map((product) => product.category);
  //If products is null or undefined, use [] instead.
  //Otherwise, use the actual value of products.
  const uniqueCategories = [...new Set(categories)];

  const  {search} = useLocation()
  
  const searchCategory =  useMemo(()=> new URLSearchParams(search).get('category') ,[search])
  const Filteroptions = useMemo(()=>{
        return uniqueCategories.map((category, idx) => (
          <Link
            key={idx}
            to={`/FakeStore/?category=${category}`}
            className={`flex  text-gray-500 ${ (category == searchCategory) && 'scale-105 font-medium text-gray-800' } active:scale-100  hover:scale-105 capitalize items-center gap-2.5`}
          >
            <span
              style={{ backgroundColor: color() }}
              className={`inline-block w-[10px]  ${ category == searchCategory && 'opacity-100'}  opacity-30 group-hover:opacity-100 aspect-square rounded-full `}
            ></span>
            {category}
          </Link>
        ))
  } , [searchCategory])
   

  return (
    <div>
      <h1 className=" capitalize  my-2  text-lg  font-medium ">
        Category Filter
      </h1>
      <div className="flex flex-col gap-1 text-[15px] pl-1.5 ">
        {Filteroptions}
      </div>
    </div>
  );
};

export default React.memo(CategoryFilter); 
