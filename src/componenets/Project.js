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
import LoginPage from './Auth/LoginPage'



// const route = createBrowserRouter( [
//   {
//     path:"/",
//     element:<NavBarCompo />,
//     children: [
//       {path: "/" , element: ctxData.isAuth ? <Home /> : <LoginPage /> },
//       {path: "/products" , element: <Product />},
//       {path: "/about" , element: <AboutUs />},
//       {path: "/contact" , element: <ContactUs />},
//       {path: "/cart" , element: <Cart/>  },
//       {path: "/products/:productID", element : <ProductDetails />},
//       {path: '/auth', element: <LoginPage />}
//     ]
//   },
 
// ])

const Project = () => {
  const ctx = useContext(DataContext);
   let isCartVisible = ctx.pageVisibility.isCartVisible;

   const route = createBrowserRouter( [
    {
      path:"/",
      element:<NavBarCompo />,
      children: [
        {path: "/" , element: ctx.isAuth ? <Home /> : <LoginPage /> },
        {path: "/products" , element:  ctx.isAuth ? <Product /> : <LoginPage /> },
        {path: "/about" , element: ctx.isAuth ? <AboutUs /> : <LoginPage />},
        {path: "/contact" , element: ctx.isAuth ? <ContactUs /> : <LoginPage />},
        {path: "/cart" , element: ctx.isAuth ? <Cart/> : <LoginPage /> },
        {path: "/products/:productID", element : ctx.isAuth ? <ProductDetails /> : <LoginPage />},
        {path: '/auth', element:  ctx.isAuth ? <Home /> : <LoginPage />}
      ]
    },
   
  ])
   
  return (
  <>
    {isCartVisible && <Cart/>}
    <RouterProvider router={route}/>
    </>
  )
}

export default Project