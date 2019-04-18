

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CheckoutResult extends Component {


  render() {
    return (
      <div className="contact-us">
        <div className="info-container">
        {JSON.stringify(this.props.state, null, 2) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cart, filters }) => ({
  state: { cartItems: cart.cartItems, userInfo: filters.userInfo , total:cart.total }
})


export default connect(mapStateToProps)(CheckoutResult)
