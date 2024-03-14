import React, { useContext } from 'react'
import Product from "./products/Product"
import Home from "./HomePage/Home"
import ContactUs from './Contactus/ContactUs'
import AboutUs from "./Aboutus/AboutUs"
import Cart from "./Cart/Cart"
import DataContext from './context/DataContext'

const Project = (props) => {
  // const ctx = useContext(DataContext);
  //  let isHomePageVisible = ctx.pageVisibility.isHomePageVisible;
  //  let isProductVisible = ctx.pageVisibility.isProductVisible;
   
  return (
  <>
    {props.data.isHomePageVisible && <Home/>}
    {props.data.isProductVisible && <Product/>}
    {props.data.isAboutUsVisible && <AboutUs/>}
    {props.data.isContactUsVisible && <ContactUs/>}
    {props.data.isCartVisible && <Cart cartVisibility = {props.data.isCartVisible}/>}
    </>
  )
}

export default Project