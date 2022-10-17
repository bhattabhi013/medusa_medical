import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <div className='hero'>
<div className="card bg-dark text-black border-0" >
  <img src="../s1.jpg" className="card-img-top" alt="" height="550px"/>
  <div className="card-img-overlay d-flex flex-column  justify-content-center">
    <div className="container">
    <h2 className="card-title display-1 fw-bolder mb-0">New Season Arrival</h2>
    <p className="card-text lead display-4">Check out all the trends.</p>
    
    </div>
   
  </div>
</div>
<Product/>
    </div>
  )
}
