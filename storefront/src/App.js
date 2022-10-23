// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Singleproduct from './components/Singleproduct';
import About from './components/About';
import Contact from './components/Contact';
import CommingSoon from './components/CommingSoon';

function App() {
  return (
    <>
   
    
      <Navbar/>
      <Routes>
<Route exact path="/Home" element={<Home/>} />
<Route exact path="/Products" element={<Products/>} />
<Route exact path="/Checkout" element={<Checkout/>}/>
<Route exact path="/details" element={<Singleproduct/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/Contact" element={<Contact/>}/>
<Route exact path="/CommingSoon" element={<CommingSoon/>}/>

      </Routes>
     
    
    </>
  );
}

export default App;
