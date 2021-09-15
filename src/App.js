import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import AddPush from './components/pages/AddPush';
import ContactUs from './components/pages/ContactUs';
import About from './components/pages/About';
import Slider from './components/inc/Slider';
import Footer from './components/inc/Footer';



function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Slider/>
      <Switch>

        <Route exact path= "/"> 
          <Home/>
        </Route>

        <Route path = "/addpush"> 
          <AddPush/>
        </Route>

        <Route path = "/contactus"> 
          <ContactUs/>
        </Route>

        <Route path = "/aboutus"> 
          <About/>
        </Route>

      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
