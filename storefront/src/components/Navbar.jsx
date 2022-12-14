import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/Home">SwagNation</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
       
       
       
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="buttons">
<NavLink to="/CommingSoon" className='btn btn-outline-dark'>
    <i className='fa fa-sign-in me-1'></i>Login
</NavLink>
<NavLink to="/CommingSoon" className='btn btn-outline-dark'>
    <i className='fa fa-user-plus me-1'></i>Register
</NavLink>
<NavLink to="/CommingSoon" className='btn btn-outline-dark'>
    <i className='fa fa-shopping-cart me-1'></i>Cart
</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
