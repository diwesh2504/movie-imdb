import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/MainPage';
import EnterPage from './Pages/EnterPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/data" exact component={EnterPage}/>
      </Switch>
    </Router>
  );
}

export default App;
