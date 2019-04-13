import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItemList from './CartItemList'
import './Cart.css'

export class Cart extends Component {

  render() {
    return (
      <div className="cart-container">
        <CartItemList cartItems={this.props.cartItems}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
