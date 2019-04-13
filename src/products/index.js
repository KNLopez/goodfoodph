import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'

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

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps)(Products)
