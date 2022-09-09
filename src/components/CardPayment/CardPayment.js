import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCard from './SimpleCard/SimpleCard';


const stripePromise = loadStripe('pk_test_51IhXQhFSjV7gap4AlzZ308d9w0uXHK5AiqJQwCfxjGtZzxzHsWVe2XeHzWf2nyDpDNibnXMQCe971cBRS03H1Ohe00OpCuqu9L');

const CardPayment = () => {
    
    return (
        <Elements stripe={stripePromise}>
             <SimpleCard></SimpleCard>
        </Elements>
    );
};

export default CardPayment;