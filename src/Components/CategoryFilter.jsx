import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";

const CategoryFilter = () => {
  const {products} = useContext(productContext);

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

  return (
    <div>
      <h1 className=" capitalize  my-2  text-lg  font-medium ">
        Category Filter
      </h1>
      <div className="flex flex-col gap-1 text-[15px] pl-1.5 ">
        
        {uniqueCategories.map((category, idx) => (
          <Link
            key={idx}
            to={`/?category=${category}`}
            className="flex focus:scale-105 text-gray-500 focus:text-gray-800 focus:font-medium  group active:scale-100 hover:scale-105 capitalize items-center gap-2.5"
          >
            <span
              style={{ backgroundColor: color() }}
              className="inline-block w-[10px]  group-focus:opacity-100 opacity-30 group-hover:opacity-100 aspect-square rounded-full "
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
