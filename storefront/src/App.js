// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
  return (
    <>
   
    
      <Navbar/>
      <Routes>
<Route exact path="/Home" element={<Home/>} />
<Route exact path="/Products" element={<Products/>} />
<Route exact path="/Checkout" element={<Checkout/>}/>

      </Routes>
     
    
    </>
  );
}

export default App;
