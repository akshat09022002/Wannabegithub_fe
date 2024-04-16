import { BrowserRouter,Route, Routes} from 'react-router-dom';

import Signup from './pages/signup.tsx';
import Signin from './pages/signin.tsx';
import Verify from './pages/verify.tsx';



const App = ()=>{
 


  return (
  
       <BrowserRouter>
       <Routes>
       <Route path='/' Component={Signup}></Route>
       <Route path='/signin' Component={Signin}></Route>
       <Route path='/verify' Component={Verify}></Route>
       </Routes>
       </BrowserRouter>
  )
}

export default App
