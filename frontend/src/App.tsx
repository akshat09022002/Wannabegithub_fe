import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Signup from './signup.tsx';
import Signin from './signin.tsx';


const App = ()=>{
 
 const router =  createBrowserRouter([
    {path:"/sign-in",element:<Signin/>},
    {path:"/sign-up",element:<Signup/>}
  ])

  return (
   
  

        <>
        <RouterProvider router={router}/>
        </>
  )
}

export default App
