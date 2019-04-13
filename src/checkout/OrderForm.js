import React, { Component } from 'react'
import { connect } from 'react-redux'

export class OrderForm extends Component {

  render() {
    return (
      <div className="contact-form">
        <h2>Contact Information</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Email" type='email'/>
          <input placeholder="Name" type='text'/>
          <input placeholder="Address" type='text'/>
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
