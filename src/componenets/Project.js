import React, { useContext } from 'react'
import Product from "./products/Product"
import Home from "./HomePage/Home"
import ContactUs from './Contactus/ContactUs'
import AboutUs from "./Aboutus/AboutUs"
import Cart from "./Cart/Cart"
import DataContext from './context/DataContext'
import NavBarCompo from './NavBar/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter( [
  {path: "/" , element: <Home />},
  {path: "/products" , element: <Product />},
  {path: "/about" , element: <AboutUs />},
  {path: "/contact" , element: <ContactUs />},
])

const Project = () => {
  const ctx = useContext(DataContext);
   let isHomePageVisible = ctx.pageVisibility.isHomePageVisible;
   let isProductVisible = ctx.pageVisibility.isProductVisible;
   let isAboutUsVisible = ctx.pageVisibility.isAboutUsVisible;
   let isContactUsVisible = ctx.pageVisibility.isContactUsVisible;
   let isCartVisible = ctx.pageVisibility.isCartVisible;
   
  return (
  <>
    <NavBarCompo />
    {/* {isHomePageVisible && <Home/>}
    {isProductVisible && <Product/>}
    {isAboutUsVisible && <AboutUs/>}
    {isContactUsVisible && <ContactUs/>}
    {isCartVisible && <Cart/>} */}
    <RouterProvider router={route}/>
    </>
  )
}

export default Project