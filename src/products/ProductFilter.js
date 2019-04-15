import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProductFilter extends Component {
  handleClick = (e) => {
    if(e.target.checked){
      this.props.addTag(e.target.value)
    } else {
      this.props.removeTag(e.target.value)
    }
  }

  render() {
    const checkboxes = this.props.tags.map((tag, i) =>
      <div className="checkbox-container" key={i}>
        <input onChange={this.handleClick} type="checkbox" name={tag} value={tag}/> {tag}
      </div>
    )
    return (
      <div className="product-filter">
        <div className="product-filter__inner">
          <h3>FILTERS</h3>
          {checkboxes}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({
  tags: products.reduce((acc, product)=> {
    return [...new Set([...acc, ...product.tags])]
  },[])
})

const mapDispatchToProps = (dispatch) => ({
  addTag: (tag) => dispatch({ type: 'ADD_TAG', tag}),
  removeTag: (tag) => dispatch({ type: 'REMOVE_TAG', tag}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)
