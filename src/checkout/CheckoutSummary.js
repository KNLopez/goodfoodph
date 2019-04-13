import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../cart/Cart.css'

export class CheckoutSummary extends Component {

  render() {
    let items = this.props.cart.map(item=>
      <div className="cart-item" key={item.id}>
          <div className="cart-item__image-container" style={{backgroundImage: `url(//${item.img})`}}>
          </div>
        <div className="cart-item__info">
          {item.name}
          <div className="cart-item__bottom-info">
             <div className="price">{item.price}</div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="checkout-summary">
        { items }
        <div className="total">
        <h3>Total</h3>
        <h2>₱{ this.props.total }</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartItems,
  total: state.total
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary)
