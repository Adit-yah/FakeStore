  import  { useContext ,  useMemo,  } from 'react'
  import Menu from './Menu'
  import Products from './Products'
  import { productContext } from '../Utils/Context'
  import { Link, useLocation } from 'react-router-dom'


  const Home = () => {
    const {products} = useContext(productContext)

    //// useLocation() returns the current URL info; search is the query string part (e.g. "?key=value")
    const {search} = useLocation()

    //URLSearchParams() take the query string and return the obj in key-value pair 1st seperate querry string through '&'
    //then make key value keyHere=valueHere '=' seperate key and value
    const queryParams = new URLSearchParams(search)
    const searchCategory = queryParams.get('category') // Gets 'category' from query string. If not present, returns undefined. ,null


    const filterProducts = useMemo(()=>{
       return searchCategory ? products?.filter(product => product.category === searchCategory) : products
    } , [products , searchCategory])

    const renderFilterproducts = useMemo(()=>{
      return (
      filterProducts.length === 0 
      ? (<p>No products found.</p>)
      : filterProducts.map((product , idx)=>{
        return ( <Products  key={idx}   product={product}  />)
      })
    )
    } , [filterProducts])
    
   
    return (
    <div  className='md:flex  relative w-screen h-screen  overflow-x-hidden '>

    <Menu/>
    <div className=' w-full h-[calc(100vh-50px)] md:w-[85%] md:h-screen relative overflow-y-scroll [&::-webkit-scrollbar]:hidden p-3' >
    <div className='p-2 '>
    { searchCategory &&  <Link to='/' className="border-[1.5px]  border-red-300 hover:border-red-500 hover:text-red-500  active:scale-94 px-3 self-center py-1 whitespace-nowrap rounded-[3px] font-medium text-red-300 text-sm"> Home  </Link>  }
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 gap-1 '>
       { renderFilterproducts}
    </div>
    </div>
    </div>
    )
  }

  export default Home