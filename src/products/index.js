import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import './Products.css'

export class Products extends Component {

  render() {
    return (
      <React.Fragment>
        <ProductList
          products={this.props.products}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({products, searchText}) => ({
  products: products.filter(product => product.name.includes(searchText))
})


export default connect(mapStateToProps)(Products)
