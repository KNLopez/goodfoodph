import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import './Products.css'

export class Products extends Component {

  filterProducts = (products, filter) => {
    return products.reduce((accProducts, product) => {
      if(product.tags.filter(tag=> filter.tagsFilter.includes(tag)).length>0 && product.name.toLowerCase().includes(filter.searchText.toLowerCase())) {
        accProducts.push(product)
      }
      return accProducts
    }, [])
  }

  render() {
    let filtered_products = this.filterProducts(this.props.products, this.props.filter)

    return (
      <React.Fragment>
        <ProductList
          products={ filtered_products }
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ products, filter }) => ({
  products: products,
  filter: filter
})


export default connect(mapStateToProps)(Products)
