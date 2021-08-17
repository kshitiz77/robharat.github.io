import React from 'react';
import './App.css';
import Header from './Header';
import{
        BrowserRouter as Router,
        Switch,
        Route,
        Link
}from 'react-router-dom';
import Contact from './component/Contact';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Form from './component/Form';
import Footer from './component/Footer';
import SignUpForm from './component/SignUpForm';
import Error from './component/Error';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/checkout" component={Checkout}>
            <Contact />
            <Header />
            <Checkout />
            <Footer />
        </Route>
        <Route exact path="/login" component={Form}>
           <Contact />
            <Header />
            <Form />
        </Route>
        <Route exact path="/" component={Home}>
          <Contact />
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/register" component={SignUpForm}>
          <Contact />
          <Header />
          <SignUpForm />
          <Footer />
        </Route>
        <Route component={Error}>
        <Contact />
        <Header />
        <Error/>
        <Footer />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
