import  { useContext, useState  } from 'react'
import { productContext } from '../Utils/Context'
import { Link,  useNavigate, useParams } from 'react-router-dom'
import {RiArrowGoBackLine} from '@remixicon/react'
import { toast } from 'react-toastify'

const Detail = () => {
    const {products , setProducts} = useContext(productContext)
    const {id} = useParams()
    const [product] = products.filter((product) => product.id == id)
    const navigate = useNavigate()
    const [isDelete, setIsDelete] = useState(false)
    const [first, setfirst] = useState(true)
    
    function removeProduct (productToDeleteId){
      const copy = [...products]
      const UpdateProducts = copy.filter((product) => product.id != productToDeleteId)
      setProducts(UpdateProducts)
      navigate(-1)
      toast("Product deleted successfully")
    }
    

  return (
    product
    ?
     <div className=' detailCardContainer w-full relative h-screen flex  items-center justify-center '>
      <div className='detailCard relative w-full  max-w-4xl md:flex   md:items-center  m-10 md:gap-10  '>
        <div  onClick={()=>navigate(-1)} className='absolute right-0  top-0 cursor-pointer hover:text-gray-600  text-gray-500  active:scale-95  '><RiArrowGoBackLine/></div>
        <img className='w-full max-w-[250px] m-auto object-contain ' src={product.image} alt="" />
       <div className="details w-full  flex flex-col gap-2.5  ">
          <h6 className='capitalize text-md  hover:text-gray-500 text-gray-400 sm:text-lg '>{product.category}</h6>
           <h1 className=' text-lg sm:text-xl '>{product.title}</h1>
            <h3 className='text-red-500'>${product.price}</h3>
             <h4 className='leading-[1.3]  text-sm'>{product.description}</h4>
       <div className="buttons flex gap-2.5 mt-2 ">
        <button 
        onClick={()=>{navigate(`/editProduct/${product.id}`)}} 
        className="border-[1.5px] cursor-pointer border-blue-300 hover:border-blue-500 hover:text-blue-500   active:scale-94 px-3 self-center py-1 whitespace-nowrap rounded-[3px] font-medium text-blue-300 text-sm"> Edit</button>
        <button 
         onClick={(e)=>{setIsDelete(true)}
        }
         className="border-[1.5px] cursor-pointer border-red-300 hover:border-red-500 hover:text-red-500  active:scale-94 px-3 self-center py-1 whitespace-nowrap rounded-[3px] font-medium text-red-300 text-sm"> Delete  </button>
          </div>
        </div>
      </div>
      {/* confirmation for deletion of particular product */}
      {isDelete &&  <div className="conformation h-full w-full flex   justify-center absolute  bg-white/60  backdrop-blur-[1px] items-center">
       <div className='  relative  flex flex-col items-center justify-center  p-10 bg-white/60 backdrop-blur-sm shadow-sm shadow-gray-500 rounded-xl'>
          <div>
               <h1 className='text-gray-600 whitespace-nowrap text-[2.9vmin] '>Are you sure want to delete</h1>
               <div className='flex gap-2 mt-3 justify-center'>
               <button 
               onClick={()=>{
                removeProduct(product.id)
                setIsDelete(false)
              }}
               className="border-[1.5px] cursor-pointer border-blue-300 hover:border-blue-500 hover:text-blue-500   active:scale-94 px-4 self-center py-1 whitespace-nowrap rounded-[10px] font-medium text-blue-300 text-md"  >Yes</button>
               <button 
               onClick={()=>setIsDelete(false)}              
               className="border-[1.5px] cursor-pointer border-red-300 hover:border-red-500 hover:text-red-500  active:scale-94 px-4 self-center py-1 whitespace-nowrap rounded-[10px] font-medium text-red-300 text-md">No</button>
               </div>
          </div>
        </div>
      </div>}

    </div>
    :
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='text-center'>
      <h1 className='text-4xl'>Product Not Found</h1>
      <Link to='/' className='text-blue-600 text-xl block mt-2 hover:underline active:scale-95'>Home page</Link>
      </div>
    </div>
 
  )
}

export default Detail