import { cartState, productState } from './state'

const cart = (state = { ...cartState, productState} , action) => {
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
            ...state.productState.filter(item => item.id === action.id)[0],
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
    }
  return state;
}

export default cart