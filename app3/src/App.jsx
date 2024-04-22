
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import Allblog from './pages/Allblog';
import Createblog from './pages/Createblog';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Myblog from './pages/Myblog';

function App() {
  return (
    <div className='container'>
<Routes>
<Route path='/' element={<Loginpage/>}/>
  <Route path='/Loginpage' element={<Loginpage/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/Homepage' element={<Homepage/>}/>
  <Route path='/Createblog' element={<Createblog/>}/>
  <Route path='/Allblog' element={<Allblog/>}/>
  <Route path='/Myblog' element={<Myblog/>}/>

</Routes>
<ToastContainer/>
</div>
  )
}


export default App;
