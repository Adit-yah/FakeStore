
import { Link } from 'react-router-dom'

const Products = ({product }) => {

  return (
 <Link to={`/details/${product.id}`}  className=' min-h-[100px]  sm:max-h-[230px]  bg-white inline-block p-4 sm:p-4  border-1 overflow-hidden border-gray-100 shadow-md shadow-gray-400'>
    <img className=' h-[100px]  sm:h-[130px]  w-full object-contain hover:scale-105 ' src={`${product.image}`} alt="" />
    <div className='w-full px-2 '>
    <h4 className=' text-[10px] md:text-sm text-ellipsis overflow-hidden mt-2 whitespace-nowrap hover:text-blue-400 active:scale-95 '>{product.title}</h4>
    </div>
 </Link>

  )
}

export default Products