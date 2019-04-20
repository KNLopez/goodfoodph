import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { submitForm } from '../store/actions'

export class OrderForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value
    };

    this.props.submitForm(formData)
    this.props.history.push('/results')
  }

  render() {
    return (
      <div className="contact-form">
        <h2>Contact Information</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="email" placeholder="Email" type='email'/>
          <input name="name" placeholder="Name" type='text'/>
          <input name="phone" placeholder="Contact Number" type='text'/>
          <input name="address" placeholder="Address" type='text'/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (formData) => {dispatch(submitForm(formData))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderForm))
