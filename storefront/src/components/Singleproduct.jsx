import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {useParams} from "react-router";


export default function Singleproduct(prop) {
  const location = useLocation();
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    console.log(location.state.data);
    useEffect(()=>{
        const getProduct=async() =>{
          //  const response=await fetch(`http://localhost:9000/store/products/${id}`)
        }
        getProduct();
    },[]);
    
  return (
   
    <>
 <div>Singleproduct</div>
 <h1>{product.title}</h1>
    </>
  )
}
