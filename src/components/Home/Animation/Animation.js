import React from 'react';
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import './Animation.css';
import gear from "../../../images/settings.png";
 const Animation = () => {

    
    return (
     <motion.div
      className="square"
      animate={{ x: [0, 0, 0, 0, 0], rotate: 360 }}
      transition={{ duration: 3, loop: Infinity, ease: "linear" }}
    ><img class="d-flex align-items-center justify-content-center" src={gear} alt=""></img></motion.div>  
    );
};

export default Animation;