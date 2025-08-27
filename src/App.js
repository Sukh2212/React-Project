

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Room from './pages/Room';
import Login from './pages/Login';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Read from './pages/Read';
import Contact from './pages/Contact';




import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/room' element={<Room />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/booking' element={<Booking />}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
