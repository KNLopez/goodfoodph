import initialState from './state'

const rootreducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_TO_CART':
      const ids = state.cartItems.map(item => item.id)
      if (ids.includes(action.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === action.id) {
              item.qty += 1
            }
            return item
          })
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {
            ...state.products.filter(item => item.id === action.id)[0],
            qty: 1
          }], showCart: true
        }
      }
    case 'ADJUST_QUANTITY':
      let sum;
      state.cartItems.map(item=>{
        if(item.id === action.data.id){
           sum = item.qty + action.data.val
        }
      })
      if(sum < 0){
        return {...state, cartItems: state.cartItems.filter(item => 
          item.id !== action.data.id
        )}
      } else {
        return {
          ...state, cartItems: state.cartItems.map(item => {
              if(item.id === action.data.id){
                  item.qty += action.data.val
              }
              return item
          })
        }
      }
    case 'TOGGLE_CART':
      return {
        ...state, showCart: !state.showCart
      }
    case 'CHECKOUT':
      let total = 0;
      state.cartItems.map(item=> {total += (item.price * item.qty)
      })
      return {
        ...state,
          total: parseFloat(Math.round(total * 100) / 100).toFixed(2),
          showCart: false
      }
    case 'SEARCH_FILTER_PRODUCTS':
      return {
        ...state,
          filter: {
            ...state.filter, searchText: action.searchText
          }
      }
    case 'ADD_TAG':
     return {
       ...state, filter: {
          ...state.filter,
          tagsFilter: [ ...state.filter.tagsFilter, action.tag]
       }
     }
     case 'REMOVE_TAG':
      return {
        ...state, filter: {
          ...state.filter,
          tagsFilter: state.filter.tagsFilter.filter(tag => tag !== action.tag)
        }
      }
    case 'SUBMIT_FORM':
      return {
        ...state, userInfo: {...action.formData}
      }
  }
  return state;
}

export default rootreducer