import cart from './cart'
import filters from './filters'
import products from './products'
import { combineReducers } from 'redux'

const rootreducer = combineReducers({cart: cart, filters: filters, products: products})

export default rootreducer