import * as actionTypes from './actionTypes'

export const submitForm = (formData) => {
  return {
    type: actionTypes.SUBMIT_FORM,
    formData
  }
}