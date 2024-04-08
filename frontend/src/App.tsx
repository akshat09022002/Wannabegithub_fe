import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Signup from './pages/signup.tsx';
import Signin from './pages/signin.tsx';


const App = ()=>{
 
 const router =  createBrowserRouter([
    {path:"/signin",element:<Signin/>},
    {path:"/signup",element:<Signup/>}
  ])

  return (
        <>
        <RouterProvider router={router}/>
        </>
  )
}

export default App
