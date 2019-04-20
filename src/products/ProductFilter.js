import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTag, removeTag } from '../store/actions'

export class ProductFilter extends Component {
  handleClick = (e) => {
    console.log(e.target.value)
    if(e.target.checked){
      this.props.addTag(e.target.value.toLowerCase())
    } else {
      this.props.removeTag(e.target.value.toLowerCase())
    }
  }

  render() {
    const checkboxes = this.props.tags.map((tag, i) =>
      <div className="checkbox-container" key={i}>
          <input onChange={this.handleClick} type="checkbox" id={tag} value={tag}/> 
          <label htmlFor={tag}>{tag}</label>
      </div>
    )
    return (
      <div className="product-filter">
        <div className="product-filter__inner">
          <div className="product-filter__inner-bg">
            <h3>FILTERS</h3>
            {checkboxes}
          </div>
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
  addTag: (tag) => dispatch(addTag(tag)),
  removeTag: (tag) => dispatch(removeTag(tag)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)
