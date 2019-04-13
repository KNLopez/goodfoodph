import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartItemList extends Component {
  render() {
    const cartItemList = this.props.cartItems.map(cartItem => 
      <CartItem
        key={cartItem.id}
        id={cartItem.id}
        img={cartItem.img}
        name={cartItem.name}
        price={cartItem.price}
        calories={cartItem.calories}
        protein={cartItem.protein}
        carbs={cartItem.carbs}
        fat={cartItem.fat}
        qty={cartItem.qty}
        />
    )
    return (
      <div className="cart-item-list-container">
        <h2>Items</h2>
        { cartItemList }
      </div>
    )
  }
}
