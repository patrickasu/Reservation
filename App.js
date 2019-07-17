import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/mystyle.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Home from './components/home';
import RoomDetails from './components/roomdetails';
import Wellness from './components/wellness';
import Restaurant from './components/restaurant';
import SpecialOffer from './components/specialoffer';
import About from './components/about';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	     <div className="App">
	       <Navbar />
	       <Welcome /> 
	       <Route exact path="/" component={Home} />
	       <Route path="/roomdetails" component={RoomDetails} />
	       <Route path="/wellness" component={Wellness} />
	       <Route path="/restaurant" component={Restaurant} />
	       <Route path="/specialoffer" component={SpecialOffer} />
	       <Route path="/about" component={About} />
	       <Footer />
	     </div>
	    </BrowserRouter>
    );
  }
}

export default App;
