import React from 'react';
import { Carousel } from 'react-bootstrap';
import plumbing1 from "../../../../images/plumbing1.jpg";
import plumbing2 from "../../../../images/plumbing2.jpg";
import plumbing3 from "../../../../images/plumbing3.jpg";
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div class="container-fluid maindiv">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-size"
                        src={plumbing1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 class="carouselheader">WE ARE THE BEST AMONG ALL</h3>
                        <p class="carouseltext">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-size"
                        src={plumbing2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 class="carouselheader">CONTACT US AND GET THE BEST DEAL</h3>
                        <p class="carouseltext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-size"
                        src={plumbing3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 class="carouselheader">WE DO ALL KINDS OF PLUMBING</h3>
                        <p class="carouseltext">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;