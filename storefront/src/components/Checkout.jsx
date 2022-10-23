import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { NavLink, useLocation } from 'react-router-dom';
 import './checkout.css';


const Checkout = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  var totalCartPrice = 0;
  const product = location.state.data;
  const getUsers =  () => {
             
    const response =  fetch('http://localhost:9000/store/products')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        let product =data.products;
        console.log(product)

        setUsers(product);
    })
  

}

useEffect(() => {
getUsers();
}, []);

const alert=()=>{
    window.alert("congratulations , you have placed your order !!");
}

  return (
    <>
    {/* <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shoppe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Checkout
                </a>
              </li>
            </ul>
            {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          {/* </div> */}
        {/* </div> */}
      {/* </nav> */}


    {/* </div> */}

    <div className="container">

   
    <div className="left">

   
        <div className="row">

        <div className="col-md-7">
            <div className="card">
                <div className="card-header">
                    <h4>Basic Information</h4>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> First Name</label>
                                <input type="text" name="firstname" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Last Name</label>
                                <input type="text" name="lastname" className="form-control" />
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Phone Number</label>
                                <input type="number" name="phone" className="form-control" />
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Email Address</label>
                                <input type="email" name="email" className="form-control" />
                             
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-3">
                                <label> Full Address</label>
                                <textarea rows="3" name="address"  className="form-control"></textarea>
                               </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>City</label>
                                <input type="text" name="city" className="form-control" />
                               
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>State</label>
                                <input type="text" name="state" className="form-control" />
                               
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>Zip Code</label>
                                <input type="text" name="zipcode" className="form-control" />
                                
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>

        <div className="right">

       
        
        <div className="col-md-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="50%">Product</th>
                        <th>Price</th>
                        {/* <th>Qty</th> */}
                        <th>Total</th>
                    </tr>
                </thead>
                
                <tbody>
                   
                            <tr>

                                <td>{product.title}</td>
                                <td>{product.variants[0].prices[1].amount}</td>
                                {/* <td>2</td>  */}
                                <td>{product.variants[0].prices[1].amount}</td> 
                            </tr>
                        
                    
                    <tr>
                        <td colSpan="2" className="text-end fw-bold">Grand Total</td>

                        <td colSpan="2" className="text-end fw-bold">{product.variants[0].prices[1].amount}</td>
                    </tr>
                </tbody>
            </table>


        </div>
        </div>

        </div>
<button onClick={alert} className="btn">
place order
</button>
   <NavLink  to="/Home">go to Home</NavLink>
 
    
    </>
  );
  
};

export default Checkout;
