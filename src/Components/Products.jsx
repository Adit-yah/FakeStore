
import { Link } from 'react-router-dom'

const Products = ({product }) => {

  return (
 <Link to={`/details/${product.id}`}  className='w-[19%] mr-2 h-[40vh] bg-white inline-block p-2 border-1 overflow-hidden border-gray-100 shadow-md shadow-gray-400'>
    <img className='h-[80%] w-full object-contain hover:scale-105 ' src={`${product.image}`} alt="" />
    <h4 className=' text-center mt-2 hover:text-blue-400 active:scale-95 h-[30px] overflow-hidden'>{product.title}</h4>
 </Link>

  )
}

export default Products