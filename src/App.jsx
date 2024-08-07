import 'leaflet/dist/leaflet.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/forgetpassword/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signup from './pages/forgetpassword/Signup';
import Forgetpassword from './pages/forgetpassword/Forgetpassword';
import Checkemail from './pages/forgetpassword/Checkemail';
import Reset from './pages/forgetpassword/Reset';
import Comfirm from './pages/forgetpassword/Comfirm';
import Land from './Components/Landingpage/Land';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Security from './pages/Security';
import Payment from './pages/Payment';
import Addpayment from './pages/Addpayment';
import Notification from './pages/Notification';
import Become from './pages/Become';
import Space from './pages/Space';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Land' element={<Land/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/checkemail' element={<Checkemail/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/comfirm' element={<Comfirm/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Security' element={<Security/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/Add-Payment' element={<Addpayment/>}/>
          <Route path='/Notification' element={<Notification/>}/>
          <Route path='/Land' element={<Land/>}/>
          <Route path='/Become' element={<Become/>} />
          <Route path='/space' element={<Space/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App