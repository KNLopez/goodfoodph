import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Cart from './cart'
import Products from './products'
import Contact from './pages/Contact'
import Checkout from './checkout'
import CheckoutResults from './checkout/CheckoutResult'
import Navbar from './navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Cart />
          <Route exact path ={process.env.PUBLIC_URL + '/'} component={ Products } />
          <Route path='/contact' component={ Contact } />
          <Route path='/checkout' component={ Checkout } />
          <Route path='/results' component={ CheckoutResults } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
