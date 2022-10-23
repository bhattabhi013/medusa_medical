import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='hero'>
<div className="card" >
  <img src="../home-1.jpg" className="card-img-top" alt="" height="550px" width="100%"/>
  <div className="card-img-overlay d-flex flex-column  justify-content-center">
    <div className="container">
    <h2 className=" mb-0 text-center text-xl">Get affordable online pharmacy solutions.</h2>
    
   </div>
   
  </div>
</div>
<Products/>
    </div>
  )
}
