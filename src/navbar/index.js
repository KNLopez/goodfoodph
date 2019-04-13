import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import './Nav.css';

export class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul>
          <NavLink to="/">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
