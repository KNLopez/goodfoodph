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

export const searchFilter = (searchText) => {
  return {
    type: actionTypes.SEARCH_FILTER_PRODUCTS,
    searchText
  }
}
