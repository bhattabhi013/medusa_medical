// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
   
    
      <Navbar/>
      <Switch>
<Route exact path="/" element={<Home/>} />
<Route exact path="/products" element={<Products/>} />


      </Switch>
     
    
    </>
  );
}

export default App;
