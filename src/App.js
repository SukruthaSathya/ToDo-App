import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';


function App() {
  

  return (
    <div>
      <Router>
        <Route>
        <Home exact path='/' />
        </Route>
      </Router>
      </div>

    
  );
}

export default App;
