import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Active from './Pages/Active/Active';
import Home from './Pages/Home/Home';
import Completed from './Pages/Completed/Completed';
import Cancelled from './Pages/Cancelled/Cancelled'
import Post from './context'

function App() {
  

  return (
    <div>
      
      <Router>
      <Post>
        <Route exact path='/'>
        <Home  />
        </Route>
        
        <Route path='/active'>
        <Active />
        </Route>
        </Post>
        <Route  path='/completed'>
        <Completed/>
        </Route>
        <Route  path='/cancelled'>
        <Cancelled />
        </Route>
      </Router>
     
      </div>

    
  );
}

export default App;
