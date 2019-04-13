import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom';
import Cartheader from './Cartheader'
import CartItemList from './CartItemList'
import './Cart.css'

export class Cart extends Component {

  computeTotalQuantity = (cartItems) => {
    let totalqty = 0;
    cartItems.map(cartItem => totalqty += cartItem.qty)
    return totalqty
  }

  computeTotalPrice = (cartItems) => {
    let totalPrice = 0
    cartItems.map( cartItem => totalPrice += (cartItem.price * cartItem.qty))
    return parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
  }

  handleClick = (e) => {
    this.props.toggleCart()
  }

  checkOut = (e) => {
    this.props.checkOut()
    this.props.history.push('/checkout')
  }

  render() {
    let totalQuantity = this.computeTotalQuantity(this.props.cartItems)
    let totalPrice = this.computeTotalPrice(this.props.cartItems)

    return (
      <div className={ this.props.showCart ? 'cart-container active' : 'cart-container'}>
        <Cartheader toggleCart={ this.handleClick} total={totalQuantity}/>
        {
          this.props.cartItems.length > 0 ? <CartItemList cartItems={this.props.cartItems}/> : <div className="no-cart-items">Nothing here..</div>
        }
        { this.props.cartItems.length > 0 ?
          <div className="checkout" onClick={this.checkOut}>
              <div>Proceed to checkout</div>
              <div>₱{  totalPrice }</div>
          </div> :
          ''
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  showCart: state.showCart
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => {dispatch({type: 'TOGGLE_CART' })},
    checkOut: () => {dispatch({type: 'CHECKOUT'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))
