import React from 'react';
import logo from "../../../../images/logo.png";
import callpic from "../../../../images/phone-call.png";
import conversation from "../../../../images/conversation.png";
import open from "../../../../images/open.png";
import './Navbar.css';

const Navbar = () => {
    const user = sessionStorage.getItem("token");
    const handlelogout = () =>{
        sessionStorage.setItem("token", "")
    }
    return (
        <div>     
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12 align-items-center justify-content-center text-center mt-3">
                            <a href="/">
                                <div class="d-flex ">
                                    <div>
                                        <img class="logo-design" src={logo} alt=""></img>
                                    </div>
                                    <div>
                                        <p class="logo">Plumbing Masters</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6 mt-3">
                            <div class="row align-items-center justify-content-center text-center">
                                <div>
                                     <img class="icon-design" src={callpic} alt=""></img>
                                </div>
                              <div class="col-md-8 header-design">
                                    <div class="d-flex flex-column">
                                          <h4>Call Us</h4>
                                          <p><a class="contact-design" href="tel:5551234567">++5551234567</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6 header-design  mt-3">
                            <div class="row align-items-center justify-content-center text-center">
                                <div>
                                     <img class="icon-design" src={conversation} alt=""></img>
                                </div>
                              <div class="col-md-8">
                                    <div class="d-flex flex-column">
                                          <h4>Mail Us</h4>
                                          <p><a class="contact-design" href="mailto:example@hola.com">example@hola.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6 header-design  mt-3">
                            <div class="row align-items-center justify-content-center text-center">
                                <div >
                                     <img class="icon-design" src={open} alt=""></img>
                                </div>
                              <div class="col-md-8">
                                    <div class="d-flex flex-column">
                                          <h4>Working Time</h4>
                                          <p><a class="contact-design" href="tel:5551234567">Open Now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light Navbar-design ">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active item-design" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link item-design" href="/dashboard">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link item-design" href="/givereviews">Review</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link item-design" href="/">Contact Us</a>
                                    </li>
                                    {
                                        user? 

                                    <li class="nav-item">
                                        <a class="nav-link item-design" href="/" onClick={handlelogout}>Log Out</a>
                                    </li>

                                    :
                                    <li class="nav-item">
                                        <a class="nav-link item-design" href="/login">Sign In</a>
                                    </li>

                                    }
                                   
                                   
                                </ul>
                                <form class="d-flex ml-auto">
                                    <input class="form-control me-2 search-design" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success btn-design" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

              
      </div>
    );
};

export default Navbar;