import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data' 


const Navbar = ({ setData }) => {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState([])

  const filterByCategory = (category) => {
    const element = items.filter((Product) => Product.category === category)
    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter((Product) => Product.price >= price)
    setData(element)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <>
      <header className='sticky-top'>
        <div className="nav-bar">
          <Link to={'/'} onClick={() => setData(items)} className="brand">E-Commerce</Link>

          <form 
          onSubmit={handleSubmit}
          className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={'/cart'} className="cart"> cart</Link>
        </div>

        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div
            onClick={() => setData(items)}
            className="items">No Filter</div>
          <div
            onClick={() => filterByCategory('mobiles')}
            className="items">Mobiles</div>
          <div onClick={() => filterByCategory('laptops')}
            className="items">Laptops</div>
          <div onClick={() => filterByCategory('tablets')}
            className="items">tablets</div>
          <div onClick={() => filterByPrice(29999)} className="items">{">="}29999</div>
          <div onClick={() => filterByPrice(49999)} className="items">{">="}49999</div>
          <div onClick={() => filterByPrice(69999)} className="items">{">="}69999</div>
          <div onClick={() => filterByPrice(89999)} className="items">{">="}89999</div>

        </div>
      </header>
    </>
  )
}

export default Navbar
