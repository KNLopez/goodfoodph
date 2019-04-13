

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CheckoutResult extends Component {


  render() {
    return (
      <div className="contact-us">
        <div className="info-container">
        {JSON.stringify(this.props.state, null, 2) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cartItems, userInfo, total}) => ({
  state: { cartItems, userInfo, total }
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutResult)
