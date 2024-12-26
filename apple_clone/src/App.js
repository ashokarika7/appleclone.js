import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Collections from './components/Collections'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/collections' component={Collections} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
