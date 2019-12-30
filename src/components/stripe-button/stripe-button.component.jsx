import React from 'react'
import  StripeCheckout  from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_DFNfb8OHuXnauZxYzznNa0DJ00OOaIOfqL'

    const onToken = token =>{
        console.log(token);
        alert('Payment Succefull');
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CLOTHING LTD.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishablekey}
        />
        )
}


export default StripeCheckoutButton
