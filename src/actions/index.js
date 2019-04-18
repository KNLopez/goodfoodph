export function addTag(tag) {
  return {
    type: 'ADD_TAG',
    tag
  }
}

export function removeTag(tag) {
  return {
    type: 'REMOVE_TAG',
    tag
  }
}

export function addToCart(id) {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export function toggleCart() {
  return {
    type: 'TOGGLE_CART'
  }
}

export function searchFilter(searchText) {
  return {
    type: 'SEARCH_FILTER_PRODUCTS',
    searchText
  }
}

export function submitForm(formData) {
  return {
    type: 'SUBMIT_FORM',
    formData
  }
}

export function adjustQuantity(data) {
  return {
    type: 'ADJUST_QUANTITY',
    data
  }
}