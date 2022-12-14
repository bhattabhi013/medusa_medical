import React,{useState, useEffect} from 'react';

import { NavLink, useLocation, Link } from 'react-router-dom';
import {useParams} from "react-router";


export default function Singleproduct(prop) {
  const location = useLocation();
    const {id}=useParams();
    // const [product,setProduct]=useState([]);
    console.log(location.state.data);
   const product = location.state.data;

    //etProduct(location.state.data);
    
  return (
   
    <div>
    <div className="container">
        <h1> Product</h1>
   
                  
    <div className="col-md-3">
    <div className="card h-100 text-center p-4 "  key={product.id} >
      <img src={product.thumbnail} class="card-img-top" alt={product.title}/>
      <h3>{product.title}</h3>
      <h5>${product.weight}</h5>
      <div className="card-body">
        <h5 className="card-title">{product.subtitle}</h5>
        <h5 className="card-title">{product.handle}</h5>
        <h3>{product.description}</h3>
        <Link to = '/Checkout'
            state = {{ data: product }}>Checkout
            </Link>
        {/* <NavLink to="/Checkout">Checkout</NavLink> */}
       
      </div>
    </div>
    </div>
                  
              
    
        </div>
        </div>
        )
      }