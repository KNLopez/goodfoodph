import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutSummary from './CheckoutSummary'
import OrderForm from './OrderForm'
import './Checkout.css'

export class Checkout extends Component {


  render() {
    return (
      <div className="checkout-container">
        <OrderForm />
        <CheckoutSummary />
      </div>
    )
  }
}


export default Checkout
