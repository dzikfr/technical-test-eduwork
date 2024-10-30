import React from 'react'
import Navbar from '../../components/User/Navbar'
import Hero from '../../components/User/Hero'
import ProductsCard from '../../components/User/ProductsCard'
import PrimeProduct from '../../components/User/PrimeProduct'
import Footer from '../../components/User/Footer'

const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <ProductsCard/>
      <PrimeProduct/>
      <ProductsCard/>
      <Footer/>
    </div>
  )
}

export default Shop
