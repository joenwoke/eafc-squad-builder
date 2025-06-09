import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header className="site-header">
        <h1>EAFC Squad Builder</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/builder">Squad Builder</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>&copy; 2025 Joseph Nwoke</p>
      </footer>
    </>
  );
};

export default Layout;