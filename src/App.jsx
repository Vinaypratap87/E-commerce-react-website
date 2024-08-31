import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Serachitem from './components/Serachitem'
import Cart from './components/Cart'
import { items } from './components/Data'
import { useState } from 'react'


const App = () => {
  const [data, setData] = useState([...items])
  return (
    <>
      <Router>
        <Navbar setData={setData}/>
        <Routes>
          <Route path="/" element={<Product items={data} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<Serachitem />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
