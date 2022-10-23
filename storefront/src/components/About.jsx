import React from 'react'
import '../about.css';

export default function About() {
  return (
    <React.Fragment>
    <h1 class="about">About Us</h1>
    <div class="max-width">
  <div class="aboutimg"> <img src="./about-ill.png" height="500px" width="400px"></img></div>
    <p class="about-content">SwagNation is the online swag store, we all need. It offers swags in the form of clothes, cups, badges, and all that you love to call goodies at affordable price and at remote locations.
    Our delivery service is quite trustworthy, efficient and smooth. Nowadays ecommerce websites mostly focus on clothes,stationaries,and daily household chores, but
    we tend to make the awesome swags delivery easier and accessible by customizing the swags availability in all remote locations.
   <br/><br/> We have various services available here including swag classifications, company based segregation, smooth processing of payment through cash or card, easy
    checkout policies, and to add the cherry on the cake, a reliable return policy as well in case of any predicament or faulty product delivery. Our services are available at an unstoppable 
    pace and on a regular basis. Now our customers do not have to worry about swag delivery issues, as they could obtain them themselves in the wink of an eye by accessing our services. </p>
    {/* <footer>&copy; 2022 <b>-MediSwiss</b></footer> */}
    </div>
    </React.Fragment>
  )
}
