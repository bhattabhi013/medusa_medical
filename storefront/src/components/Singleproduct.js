import React,{useState, useEffect} from 'react';
import {useParams} from "rect-router";


export default function Singleproduct() {

    const {id}=useParams();
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        const getProduct=async() =>{
            const response=await fetch(`http://localhost:9000/store/products/${id}`)
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
