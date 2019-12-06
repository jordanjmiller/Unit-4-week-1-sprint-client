import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ViewProject from './components/ViewProject';
import Landing from './components/Landing';

function App(props) {
  

  return (
    <div className="App">
            <Route exact path='/' render={props => <Landing {...props} />} />
            <Route exact path='/project/:id' render={props => <ViewProject {...props} />} />
    </div>
  );
}

export default App;
