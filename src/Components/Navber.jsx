import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignCenter } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class Navber extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn"
             onClick={this.handleToggle}>
                     <FaAlignCenter className="nav-icon"/>
                    
            </button>
          </div>
          <ul className={this.state.isOpen?"nv-links show-nv": "nav-links"}>
             <li>
                  <Link to='/'>Home</Link>
             </li>
             <li>
                  <Link to='/room'>room</Link>
             </li>
          </ul>
        </div>
      </nav>
    );
  }
}
