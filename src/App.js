import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
// import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
// import SideNav from './components/sidebarComponent/sideNav';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

    
        <Route exact path = '/' component={Homepage}/>
        <Route exact path = '/About' component={About}/>
        <Route exact path = '/Contact' component={Contact}/>

      </div>
      </Router>
    );
  }
}

export default App;
