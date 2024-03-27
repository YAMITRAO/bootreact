import React, { useContext } from 'react'
import Product from "./products/Product"
import Home from "./HomePage/Home"
import ContactUs from './Contactus/ContactUs'
import AboutUs from "./Aboutus/AboutUs"
import Cart from "./Cart/Cart"
import DataContext from './context/DataContext'
import NavBarCompo from './NavBar/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './products/ProductDetails'

const route = createBrowserRouter( [
  {
    path:"/",
    element:<NavBarCompo />,
    children: [
      {path: "/" , element: <Home />},
      {path: "/products" , element: <Product />},
      {path: "/about" , element: <AboutUs />},
      {path: "/contact" , element: <ContactUs />},
      {path: "/cart" , element: <Cart/>  },
      {path: "/products/:productID", element : <ProductDetails />}
    ]
  },
 
])

const Project = () => {
  const ctx = useContext(DataContext);
   let isCartVisible = ctx.pageVisibility.isCartVisible;
   
  return (
  <>
    {isCartVisible && <Cart/>}
    <RouterProvider router={route}/>
    </>
  )
}

export default Project