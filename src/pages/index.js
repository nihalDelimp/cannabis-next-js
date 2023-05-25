import React from 'react'
import Home from './Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const index = () => {
  return (
   <>
      <Home/>
      <ToastContainer/>
      </>
  )
}

export default index