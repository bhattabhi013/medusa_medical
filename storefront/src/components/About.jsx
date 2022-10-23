import React from 'react'
import '../about.css';

export default function About() {
  return (
    <React.Fragment>
    <h1 class="about">About Us</h1>
    <div class="max-width">
  <div class="aboutimg"> <img src="./about-ill.png" height="500px" width="450px"></img></div>
    <p class="about-content">MediSwiss is the online medical store, we all need. It offers medicines at affordable price and at remote locations.
    Our delivery service is quite trustworthy, efficient and smooth. Nowadays ecommerce websites mostly focus on clothes,stationaries,and daily household chores, but
    we tend to make the medical world easier and accessible by customizing the medicine availability in all remote locations.
   <br/><br/> We have various services available here including medicine classifications, disease based segregation, smooth processing of payment through cash or card, easy
    checkout policies, and to add the cherry on the cake, a reliable return policy as well in case of any predicament or faulty product delivery. Our services are available at an unstoppable 
    pace and on a regular basis. Now our customers do not have to worry about ailments, and chronic diseases, as they could recuperate themselves in the wink of an eye by accessing our medicines. </p>
    {/* <footer>&copy; 2022 <b>-MediSwiss</b></footer> */}
    </div>
    </React.Fragment>
  )
}
