import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Cart from './cart'
import Products from './products'
import Contact from './pages/Contact'
import Checkout from './checkout'
import Navbar from './navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Cart />
          <Route exact path ='/' component={ Products } />
          <Route path='/contact' component={ Contact } />
          <Route path='/checkout' component={ Checkout } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
