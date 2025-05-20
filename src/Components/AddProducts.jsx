import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  
  
  function formHandler (e){
   e.preventDefault()
   if( 
    title.trim().length < 5 ||
    description.trim().length < 5 ||
    category.trim().length < 5 
   ) alert('Each field  atlesat have four character')
   else{
     setnewProduct({
       id : Date.now() ,
       title,
       price,
       description,
       category,
       image,
     });
     setCategory("");
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
      <div className="w-[40%] h-50%] bg-white p-8 rounded-lg shadow-md">
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
          <div className="flex gap-4 mb-4">
            {/* Category */}
            <div className="w-[48%] ">
              <input
                onChange={(e) => setCategory(e.target.value.toLowerCase())}
                id="category"
                type="text"
                name="category"
                value={category}
                required
                placeholder="Category"
                className="w-full capitalize border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Title */}
            <div className="w-[48%]">
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
          <div className="flex gap-4 mb-4">
            {/* Image URL */}
            <div className="w-[48%]">
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
            <div className="w-[48%]">
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
              onClick={()=>{nevigate('/')}}
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
