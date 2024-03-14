import React, { useContext } from 'react'
import Product from "./products/Product"
import Home from "./HomePage/Home"
import ContactUs from './Contactus/ContactUs'
import AboutUs from "./Aboutus/AboutUs"
import Cart from "./Cart/Cart"
import DataContext from './context/DataContext'

const Project = () => {
  const ctx = useContext(DataContext);
   let isHomePageVisible = ctx.pageVisibility.isHomePageVisible;
   let isProductVisible = ctx.pageVisibility.isProductVisible;
   let isAboutUsVisible = ctx.pageVisibility.isAboutUsVisible;
   let isContactUsVisible = ctx.pageVisibility.isContactUsVisible;
   let isCartVisible = ctx.pageVisibility.isCartVisible;
   
  return (
  <>
    {isHomePageVisible && <Home/>}
    {isProductVisible && <Product/>}
    {isAboutUsVisible && <AboutUs/>}
    {isContactUsVisible && <ContactUs/>}
    {isCartVisible && <Cart/>}
    </>
  )
}

export default Project