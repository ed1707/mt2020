import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">KuWerKo Terminologiedatenbank</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Vorhandene Einträge</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Unterbegriff hinzufügen</Link>
          </li>
          <li className="navbar-item">
          <Link to="/begriff" className="nav-link">Obegriff hinzufügen</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
