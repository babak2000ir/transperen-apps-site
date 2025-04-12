import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ddd', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="TransPerEn Logo" style={{ height: '40px', marginRight: '1rem' }} />
      </div>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/products/base" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>Base App</Link>
        <Link to="/products/appsmith" style={{ textDecoration: 'none', color: '#333' }}>Appsmith Integration</Link>
      </nav>
    </header>
  );
}

export default Header;