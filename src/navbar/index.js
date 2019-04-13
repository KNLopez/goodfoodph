import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import './Nav.css';

export class Navbar extends Component {

  handleClick = (e) => {
    this.props.toggleCart()
  }

  computeTotalQuantity = (cartItems) => {
    let totalqty = 0;
    cartItems.map(cartItem => totalqty += cartItem.qty)
    return totalqty
  }

  filterProducts = (e) => {
    this.props.filterProducts(e.target.value)
  }

  render() {
    let totalQuantity = this.computeTotalQuantity(this.props.cartItems)
    return (
      <nav>
        <div className="nav-container">
          <div className="logo">
            <NavLink to="/">GoodFoodPh</NavLink>
            <input onChange={this.filterProducts} type="text" placeholder="Search Products"></input>
          </div>
          <div className="menu-container">
            <ul>
              <li><NavLink to="/">OUR Menu</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><a onClick={(e)=> this.handleClick(e)} className={this.props.cartItems.length > 0 ? 'cart-active':''}>Cart{totalQuantity > 0 ? <span>{totalQuantity}</span> : ''}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems
})

const mapDispatchToProps = (dispatch)=> {
  return {
    toggleCart: () => {dispatch({type: 'TOGGLE_CART' })},
    filterProducts: (searchText) => {dispatch({type: 'FILTER_PRODUCTS', searchText})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
