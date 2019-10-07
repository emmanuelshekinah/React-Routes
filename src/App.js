import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <Router>
        <div>
         <Header />
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
        <di>
          <Footer />
        </di>
      </Router>
  );
}

export default App;
