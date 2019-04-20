import * as actionTypes from './actionTypes'

export const addTag =(tag) => {
  return {
    type: actionTypes.ADD_TAG,
    tag
  }
}

export const removeTag = (tag) => {
  return {
    type: actionTypes.REMOVE_TAG,
    tag
  }
}

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

export const searchFilter = (searchText) => {
  return {
    type: actionTypes.SEARCH_FILTER_PRODUCTS,
    searchText
  }
}

export const submitForm = (formData) => {
  return {
    type: actionTypes.SUBMIT_FORM,
    formData
  }
}

export const adjustQuantity = (data) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    data
  }
}