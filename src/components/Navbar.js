import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">MyGroups</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link p-0">Home</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link p-0">Groups</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link p-0">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
