import './App.css';
import Home from './Pages/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Home/Header/Header';
import Services from './Pages/Services/Services';
import Booking from './Pages/Booking/Booking';

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
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
