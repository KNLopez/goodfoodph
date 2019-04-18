import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'

class ProductListItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div key={this.props.id} className="product-card">
          <div className='product-image' style={{backgroundImage: `url(//${this.props.img})`}}>
            <div className="nutrition-container">
              <div className="nutrition">
                <p>{this.props.calories}</p>
                <div className="nutrition-label">Calories</div>
              </div>
              <div className="nutrition">
                <p>{this.props.protein}</p>
                <div className="nutrition-label">Protein</div>
              </div>
              <div className="nutrition">
                <p>{this.props.carbs}</p>
                <div className="nutrition-label">Carbs</div>
              </div>
              <div className="nutrition">
                <p>{this.props.fat}</p>
                <div className="nutrition-label">Fat</div>
              </div>
            </div>
          </div>
          <div className="product-info">
            <h4>{this.props.name}</h4>
            <p>₱{this.props.price}</p>
            <button onClick={()=>{this.props.addToCart(this.props.id)}}> Add to Cart </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id))}
  }
}

export default connect(null,mapDispatchToProps)(ProductListItem)
