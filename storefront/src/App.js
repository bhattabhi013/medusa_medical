// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
   
    
      <Navbar/>
      <Routes>
<Route exact path="/Home" element={<Home/>} />
<Route exact path="/Products" element={<Products/>} />
<Route exact path="/Checkout" element={<Checkout/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/Contact" element={<Contact/>}/>

      </Routes>
     
    
    </>
  );
}

export default App;
