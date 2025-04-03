import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Donate from './Components/Donate'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from "./Components/Home"

export default function App() {
  
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
      
    </div>
  )
}
export const approuter = createBrowserRouter([
  {
    path: "",
    element:<App/> ,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
    ],
  },
]);
