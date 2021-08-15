import React from 'react';
import './App.css';
import Header from './Header';
import{
        BrowserRouter as Router,
        Switch,
        Route,
        // Link
}from 'react-router-dom';
import Contact from './component/Contact';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Form from './component/Form';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
            <Contact />
            <Header />
            <Checkout />
            <Footer />
        </Route>
        <Route path="/login">
           <Contact />
            <Header />
            <Form />
            <Footer />
        </Route>
        <Route path="/">
          <Contact />
          <Header />
          <Home />
            <Footer />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
