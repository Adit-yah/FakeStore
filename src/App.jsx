import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/Detail'
import AddProducts from './Components/AddProducts'
import EditProducts from './Components/EditProduct'
import NotFound from './Components/NotFound'


const App = () => {
 


  return (
    <>
    <Routes>
      <Route path='/FakeStore' element={<Home/>} />
      <Route path='/FakeStore/addProducts' element={<AddProducts/>} />
      <Route path='/FakeStore/details/:id' element={<Detail/>} />
      <Route path='/FakeStore/editProduct/:id' element={<EditProducts/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>

    </>
  )
}

export default App