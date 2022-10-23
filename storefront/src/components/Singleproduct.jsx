import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
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
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        
       
      </div>
    </div>
    </div>
                  
              
    
        </div>
        </div>
        )
      }