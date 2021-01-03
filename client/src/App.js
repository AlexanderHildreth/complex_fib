import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib'
import About from './About'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        
        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/about" component={About}/>
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Router>
  );
}

export default App;
