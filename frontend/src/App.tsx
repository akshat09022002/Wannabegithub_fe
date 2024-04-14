import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

import Signup from './signup.tsx';
import Signin from './signin.tsx';
import Forgot from './forgot.tsx';



const App = ()=>{
 
 const router =  createBrowserRouter([

    {path:"/sign-in",element:<Signin/>},
    {path:"/sign-up",element:<Signup/>},
    {path:"/forgot-password",element:<Forgot/>}

  ])

  return (
  
        <>
        <RouterProvider router={router}/>
        </>
  )
}

export default App
