import { filters } from './state'    
    
const filter = (state = filters, action) => {

      // eslint-disable-next-line default-case
      switch(action.type){
        case 'SEARCH_FILTER_PRODUCTS':
          return {
            ...state, searchText: action.searchText
          }
        case 'ADD_TAG':
        return {
          ...state, tagsFilter: [ ...state.tagsFilter, action.tag]
        }
        case 'REMOVE_TAG':
          return {
            ...state, tagsFilter: state.tagsFilter.filter(tag => tag !== action.tag)
          }
        case 'SUBMIT_FORM':
          return {
            ...state, userInfo: {...action.formData}
          }
      }
    return state
}

export default filter