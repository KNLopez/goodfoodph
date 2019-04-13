import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CheckoutSummary from './CheckoutSummary'
import OrderFrom from './OrderForm'

export class Checkout extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="checkout-container">

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
