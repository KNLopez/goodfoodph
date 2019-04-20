import * as actionTypes from './actionTypes'

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  }
}

export const toggleCart = () => {
  return {
    type: actionTypes.TOGGLE_CART
  }
}

export const adjustQuantity = (data) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    data
  }
}