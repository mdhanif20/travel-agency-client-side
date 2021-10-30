import './App.css';
import Home from './Pages/Home/HomePage/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
