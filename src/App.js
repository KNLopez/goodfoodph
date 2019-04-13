import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Cart from './cart'
import Products from './products'
import Navbar from './navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path ='/' component={Products}/>
          <Cart />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
