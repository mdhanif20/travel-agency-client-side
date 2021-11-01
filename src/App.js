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
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Footer/Contact/Contact';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyOrder from './Pages/MyOrders/MyOrder';
import Login from './Pages/LogIn/LogIn';

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
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/manageBooking">
            <ManageBooking></ManageBooking>
          </Route>
          <Route path="/myOrders">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
