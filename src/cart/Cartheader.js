import React, { Component } from 'react'
import { ReactComponent as Arrow} from './arrow.svg'

export default class Cartheader extends Component {
  render() {
    return (
      <div className="cart-header">
        <Arrow onClick={this.props.toggleCart}/>
        <h4>YOUR ORDER</h4>
        <span>{this.props.total ? this.props.total: 0}</span>
      </div>
    )
  }
}
