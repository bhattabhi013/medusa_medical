import React from 'react';
import '../contact.css';

const Contact = () => {
    return(
       <React.Fragment>
        <h1>Contact Us</h1>
        <section>
    <br/>
    <div class="contact-information">
        <div class="form-information">
          <h3>Contact Us</h3>
          <form action="" class="contact-form">
            <input type="text" placeholder="Enter your name" required/>
            <input type="email" placeholder="Enter your email address" required/>
            <textarea id="subject" cols="1" rows="1" placeholder="Write the subject here" required></textarea>
            <textarea name="" id="message" cols="28" rows="8" placeholder="Write message here" required></textarea>
            <input type="submit" value="Send" class="send-btn"/>
         </form>
    </div>
      <div class="map">
        <iframe title="map" style={{border:0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721951.884270322!2d85.60622378740801!3d24.356291838840118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa16ff1397e887%3A0x71543a3dc3e7a20a!2sWest%20Bengal!5e0!3m2!1sen!2sin!4v1665319259589!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </div>
    </div>
    <div class="address">
        <br/>
        <ul class="details">
            <li>
                <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            </li>
            <li>
                <i class="fa fa-link fa-2x" aria-hidden="true"></i>
            </li>
            <li>
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            </li>
            <li>
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </li>
        </ul>
        <ul class="details">
            <li class="add">
                Address: 97, Park Street
                <br />Kolkata, West Bengal - 700021.
            </li>
            <li>
                Website: abcefghd.com
            </li>
            <li>
                Phone: 0987654321
            </li>
            <li>
                Email: absfec@gmail.com
            </li>
        </ul>
    </div>
  </section>
       </React.Fragment>
    );
};

export default Contact;