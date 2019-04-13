import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductListItem extends Component {
  render() {
    return (
      <div className="product-card">
        <div key={this.props.id} className="product-card">
          <div className='product-image' style={{backgroundImage: `url(//${this.props.img})`}}>
          </div>
          <div className="product-info">
            <h4>{this.props.name}</h4>
            <p>{this.props.price}</p>
            <button onClick={()=>{this.props.addToCart(this.props.id)}}> Add to Cart </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch({type: 'ADD_TO_CART', id })}
  }
}

export default connect(null,mapDispatchToProps)(ProductListItem)
