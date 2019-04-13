import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

export default class ProductList extends Component {
  render() {
    const productList = this.props.products.map(product =>
      <ProductListItem
        id={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
        calories={product.calories}
        protein={product.protein}
        carbs={product.carbs}
        fat={product.fat}
      />
    )
    return (
      <div className="product-list">
        { productList }
      </div>
    )
  }
}
