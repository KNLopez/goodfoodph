import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import ProductFilter from './ProductFilter'
import './Products.css'

export class Products extends Component {

  filterProducts = (products, filter) => {
    if(filter.tagsFilter.length > 0){
      return products.reduce((accProducts, product) => {
        if(product.tags.filter(tag=> filter.tagsFilter.includes(tag)).length>0 && product.name.toLowerCase().includes(filter.searchText.toLowerCase())) {
          accProducts.push(product)
        }
        return accProducts
      }, [])
    } else {
      return products.filter(product =>product.name.toLowerCase().includes(filter.searchText.toLowerCase()))
    }
  }

  render() {
    let filtered_products = this.filterProducts(this.props.products, this.props.filter)

    return (
      <div className="products-container">
        <ProductFilter />
        <ProductList
          products={ filtered_products }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ products, filters }) => ({
  products: products,
  filter: filters
})


export default connect(mapStateToProps)(Products)
