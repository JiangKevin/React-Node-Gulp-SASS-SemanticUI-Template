import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className ="navbar navbar-inverse navbar-static-top">
          <div className = "navbar-brand logo">
              <Link className="nav-link sidebar-brand" to="/">Logo</Link>
          </div>

          <div id = "navBar" className ="">
            <ul className ="">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </ul>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
