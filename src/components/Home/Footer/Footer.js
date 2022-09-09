import React from 'react';
import call from "../../../images/phone-call.png";
import mail from "../../../images/conversation.png";
import location from "../../../images/placeholder.png";
import calender from "../../../images/calendar.png";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shower from "../../../images/shower.png";
import pipeFix from "../../../images/pipeFix.png";
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
<div>
    <div id="plumbo-footer-contact-us" class="plumbo-footer-contact-us">
         <div class="container">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                  <div class="info-sec">
                     <div class="row">
                        <div class="col-3"><img class="footer-ico-size" src={call} alt=""></img></div>
                        <div class="col-9">
                           <div class="content">
                              <p>Call us on</p>
                              <p><a href="tel:+123456789">+123456789</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                  <div class="info-sec">
                     <div class="row">
                        <div class="col-3"><img class="footer-ico-size" src={location} alt=""></img></div>
                        <div class="col-9">
                           <div class="content">
                              <p>Meet us</p>
                              <p>Dhaka, Bangladesh</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                  <div class="info-sec">
                     <div class="row">
                        <div class="col-3"><img class="footer-ico-size" src={calender} alt=""></img></div>
                        <div class="col-9">
                           <div class="content">
                              <p>Mon - Sat</p>
                              <p>10:00-07:00</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 col-12">
                  <div class="info-sec">
                     <div class="row">
                        <div class="col-3"><img class="footer-ico-size" src={mail} alt=""></img></div>
                        <div class="col-9">
                           <div class="content">
                              <p>Mail us</p>
                              <p><a href="mailto:info@example.com">info@example.com</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </div>




    <div class="footerdown-design">
        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <div>
                        <a href="/"><img  src={logo} class="img-responsive mb-40 logo-design-footer" alt="footer logo"></img></a>
                        <h2 class="mb-80">PLUMBING MASTER</h2>
                           <ul class="footer-social d-flex">
                              <li><a href="https://www.linkedin.com/" target="_blank" class="linkedin" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                              <li><a href="https://www.twitter.com/" target="_blank" class="google" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                              <li><a href="https://www.facebook.com/" target="_blank" class="feed" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                           </ul>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                     <div class="footer-section-title">
                         <h3 class="heading">Our Professionals</h3>
                     </div>
                     <div class="footer-professional change-row">
                        <div class="row">
                           <div clas="col-4">
                              <a href="/"><img src={shower} class="img-responsive footerdown-ico-size" alt=""></img></a>
                           </div>
                           <div class="col-8">
                              <p class="meta">25 May, 2020</p>
                              <h6><a href="/">Bath Repair Services</a></h6>
                           </div>
                        </div>
                     </div>
                     <div class="footer-professional change-row">
                        <div class="row">
                           <div clas="col-4">
                              <a href="/"><img src={pipeFix} class="img-responsive footerdown-ico-size" alt=""></img></a>
                           </div>
                           <div class="col-8">
                              <p class="meta">25 May, 2020</p>
                              <h6><a href="/">Bath Repair Services</a></h6>
                           </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid tiny-footer">
            <div class="row roww-design">
               <div class="col-12">
                  <p> <a href="/">Plumbing Master</a> Copyright 2021. All Rights Reserved </p>
               </div>
            </div>
         </div>
</div>
    );
};

export default Footer;