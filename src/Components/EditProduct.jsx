import React, { useContext, useEffect, useMemo, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import { productContext } from '../Utils/Context';
import { toast } from 'react-toastify';

const editedProduct = () => {
 
  
  const {pathname} = useLocation()
  const editedProductId = pathname.split('/').at(-1)
  const [update, setupdate] = useState(false)
  const navigate = useNavigate()
  const { products , setProducts} = useContext(productContext)

  const [productToEdit] = products.filter(p => (p.id == editedProductId))  

  

  const [modifyproduct, setmodifyProduct] = useState({
    category : productToEdit.category ,
    title  : productToEdit.title,
    image : productToEdit.image,
    price : productToEdit.price,
    description : productToEdit.description
  })
 
  
 
  function changeHandler (e){
      setmodifyProduct({...modifyproduct , [e.target.name] : e.target.value })
      setupdate(true)
  }

  function updateProduct (){
    const modifyProducts = update ? products.map((p)=>{ 
      return ( p.id == editedProductId ? { ...p , ...modifyproduct } : p )
    }) : products
    setProducts(modifyProducts)
    toast('Product Updated successfully')

  }
 
  function formHandler (e){
   
    e.preventDefault()
   if( 
    modifyproduct.title.trim().length < 5 ||
    modifyproduct.description.trim().length < 5 ||
    modifyproduct.category.trim().length < 5 
   ) alert('Each field  atlesat have five character')
   else{
     update &&  updateProduct()
     navigate(-1)
    }
  }

  // useMemo(()=> updateProduct() , [ formHandler && modifyproducts ])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-[40%] h-50%] bg-white p-8 rounded-lg shadow-md">
        {/* Title of the form (Edit Product) */}
        <div className="text-2xl font-semibold mb-6 text-gray-800">
          Edit Product
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
                onChange={(e) => changeHandler(e)}
                id="category"
                type="text"
                name="category"
                value={modifyproduct.category}
                required
                placeholder="Category"
                className="w-full capitalize border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Title */}
            <div className="w-[48%]">
              <input
                onChange={(e) => changeHandler(e)}
                id="title"
                type="text"
                name="title"
                value={modifyproduct.title}
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
                onChange={(e) => changeHandler(e)}
                id="image"
                type="url"
                name="image"
                value={modifyproduct.image}
                required
                placeholder="Image URL"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Price */}
            <div className="w-[48%]">
              <input
                onChange={(e) => changeHandler(e)}
                id="price"
                type="number"
                name="price"
                value={modifyproduct.price}
                required
                placeholder="Price"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <textarea
              onChange={(e) => changeHandler(e)}
              id="description"
              name="description"
              value={modifyproduct.description}
              required
              placeholder="Description"
              rows={4}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="border-[1.5px] mb-2 border-blue-300 active:scale-94 hover:text-blue-500 hover:border-blue-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-sm"
            >
              Update Product
            </button>
            <button
              onClick={()=>setupdate(false)}
              className="border-[1.5px] mb-2 border-red-300 active:scale-94 hover:text-red-500 hover:border-red-500 px-3 self-center py-2 whitespace-nowrap rounded-[10px] font-medium text-red-300 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

    </div>
  );
  
}

export default editedProduct