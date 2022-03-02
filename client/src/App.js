import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib'
import About from './About'
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fib Calculator</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
