import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { toast } from "react-toastify";

const AddProducts = () => {
  const nevigate = useNavigate()
  const { products , setProducts} = useContext(productContext)
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [newProduct, setnewProduct] = useState(null);

  const [dropDown, setDropDown] = useState(false)
  const [isCancel, setisCancel] = useState(false)
  const categories = (products ?? []).map((product) => product.category);
  //If products is null or undefined, use [] instead.
  //Otherwise, use the actual value of products.
  const uniqueCategories = [...new Set(categories)];
  
  function formHandler (e){
   e.preventDefault()
    if( 
    title.trim().length < 5 ||
    description.trim().length < 5 ||
    category.trim().length < 5 
   ) !isCancel &&  alert(' Some fields required  atleast  Five character')
   else{
    !isCancel &&  setnewProduct({
       id : Date.now() ,
       title,
       price,
       description,
       category,
       image,
     });
    !isCancel &&  setCategory("");
     setTitle("");
     setImage("");
     setPrice("");
     setDescription("")
    }
   }
  

  function addProduct (){
    setProducts([...products , newProduct])
    toast("Product added successfully")
  }

  useEffect(()=> {
    newProduct && addProduct()
  }, [newProduct])


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className=" w-full mx-4 md:mx-0 md:w-[50vw]  bg-white p-8 rounded-lg shadow-md">
        {/* Title of the form (Add Product) */}
        <div className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Product
        </div>

        {/* Product Form */}
        <form 
        onSubmit={(e) =>{ formHandler(e)}}
        className="w-full gap-4"
        >
          {/* Category and Title */}
          <div className="md:flex md:gap-4 md:mb-4">
            {/* Category */}
            <div className="md:w-[48%] md:mb-0 mb-4  relative ">
              <input
                autoComplete="off"
                onFocus={()=>setDropDown(true)}
                onBlur={()=>{ 
                  setDropDown && setTimeout(()=>{  
                  setDropDown(false)} , 100)}}
                onChange={(e) => setCategory(e.target.value.toLowerCase())}
                
                id="category"
                type="text"
                name="category"
                value={category}
                required
                placeholder="Category"
                className="w-full capitalize border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
              { uniqueCategories?.length != 0 && dropDown &&
              <div  
                className="  border  w-full rounded absolute mt-[5px] p-2 bg-white ">
                <div className="h-3  aspect-square z-1 left-1/2   absolute top-0 -translate-x-1/2 -translate-y-[7px] bg-white  border-l border-t rotate-45 "></div>
                <ul
                className="overflow-y-scroll h-25 w-full  [&::-webkit-scrollbar]:hidden   "> 
                  {uniqueCategories?.map((c , idx)=>(
                    <li 
                    onMouseDown={()=>(setCategory(c))}
                    key={idx}
                    className="capitalize hover:text-gray-700 whitespace-nowrap text-gray-500 cursor-pointer text-md ">{c}</li>
                    ))}
                </ul>
              </div>}
            </div> 

            {/* Title */}
            <div className="md:w-[48%] md:mb-0 mb-4">
              <input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                name="title"
                value={title}
                required
                placeholder="Title"
                className="w-full capitalize border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Image URL and Price */}
          <div className="md:flex md:gap-4 md:mb-4">
            {/* Image URL */}
            <div className="md:w-[48%] md:mb-0 mb-4">
              <input
                onChange={(e) => setImage(e.target.value)}
                id="image"
                type="url"
                name="image"
                value={image}
                required
                placeholder="Image URL"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Price */}
            <div className="md:w-[48%]  md:mb-0 mb-4">
              <input
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                name="price"
                value={price}
                required
                placeholder="Price"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              value={description}
              required
              placeholder="Description"
              rows={4}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="border-[1.5px] mb-2 border-blue-300 active:scale-94 hover:text-blue-500 hover:border-blue-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-sm"
            >
              Add Product
            </button>
            <button
              className="border-[1.5px] mb-2 border-red-300 active:scale-94 hover:text-red-500 hover:border-red-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-red-300 text-sm"
              onClick={()=>{
                setisCancel(true)
                nevigate(-1)}}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
