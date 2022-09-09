import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EachService from '../EachService/EachService';
import {useSpring, animated} from 'react-spring'
import "./Servicedata.css";

const Servicedata = () => {

    const [ services , setServices] = useState([]);
    useEffect(()=>{
      const url = `https://stark-savannah-16317.herokuapp.com/showservices`;
         fetch(url)
         .then(res => res.json())
         .then(data => setServices(data))
      },[])
      const props = useSpring({opacity: 1, from: {opacity: 0}})



    
    return (
      <div class="container">
          <div>
              <h1 class="text-center mt-5 mb-5 serviceheading"><animated.div style={props}>Our Services</animated.div></h1>
          </div>
        <div class="row">
            {
                services.map(ServicesData =>
                
    
                   
                              <EachService ServicesData={ServicesData} key={ServicesData._id}></EachService>
                

                )
            }
        </div>
        </div>
    );
};

export default Servicedata;