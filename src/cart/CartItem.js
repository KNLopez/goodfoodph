import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CartItem extends Component {

  handleChange = (e) => {
    console.log(e.target.value)
  }

  quantityChange = (val,id) => {
    this.props.adjustQuantity({val,id})
  }

  render() {
    return (
      <div className="cart-item" key={this.props.id}>
          <div className="cart-item__image-container" style={{backgroundImage: `url(//${this.props.img})`}}>
          </div>
        <div className="cart-item__info">
          {this.props.name}
          <div className="cart-item__bottom-info">
             <div className="cart-controls">
              <button className="cart-controls__button" onClick={()=>{this.quantityChange(-1, this.props.id)}}>-</button>
              <input type="text" onChange={(e)=>this.handleChange(e)} value={this.props.qty} />
              <button className="cart-controls__button" onClick={()=>{this.quantityChange(1 , this.props.id)}}>+</button>
             </div>
             <div className="price">{this.props.price}</div>
          </div>
        </div>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    adjustQuantity: (data) => {dispatch({type: 'ADJUST_QUANTITY', data})}
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
