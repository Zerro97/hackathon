import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Hackathon</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            <li className={"nav-item "}>
            <Link to="/createPost" className="nav-link">Create Post</Link>
            </li>
            <li className={"nav-item "}>
            <Link to="/edit/:id" className="nav-link">Edit Posts</Link>
            </li>
            <li className={"nav-item "}>
            <Link to="/signUp" className="nav-link">Sign Up</Link>
            </li>
            <li className= {"nav-item"}>
              <Link to = "/login" className= "nav-link"> Login </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}