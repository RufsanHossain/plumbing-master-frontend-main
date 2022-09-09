import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import CardPayment from '../../../CardPayment/CardPayment';
import './Checkout.css';

const Checkout = () => {
    
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyService, setbuyService] = value2;
    const useremail = sessionStorage.getItem("token");
    const [checkoutData, setCheckoutData] = useState();


    const onSubmit = () =>{
        const orderdetails = { ...loggedInUser, email:useremail, ...buyService, orderTime: new Date(), status:"pending"};

        fetch('https://stark-savannah-16317.herokuapp.com/addorder',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(orderdetails)
        })
        .then(res => res.json())
        .then(data =>{
            setCheckoutData(data);
            if(data){
                alert("your order is placed");
            }
        })
    }
   return (
       <div class="row" id="maindiv">
           <div class="col-md-6 checkout-style" style={{display: checkoutData? "none":"block"}}>
                <p>Service : {buyService.Name}</p>
                <p>Cost : ${buyService.Cost}</p>
                <button variant="contained" size="small" color="primary" onClick={()=>onSubmit()}>Checkout</button>
           </div>
           <div class="col-md-6" style={{display: checkoutData? "block":"none"}}>
               <CardPayment></CardPayment>
           </div>
       </div>
   );
};

export default Checkout;