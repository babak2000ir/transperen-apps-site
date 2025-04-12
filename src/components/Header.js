import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header style={{ 
      backgroundColor: '#505C6D', /* Business Central Gray */
      padding: '1rem 2rem', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="TransPerEn Logo" style={{ height: '40px', marginRight: '1rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>TransPerEn</span>
      </div>
      <nav>
        <Link to="/" style={{ marginRight: '1.5rem', textDecoration: 'none', color: 'white', fontWeight: '500' }}>Home</Link>
        <Link to="/products/base" style={{ marginRight: '1.5rem', textDecoration: 'none', color: 'white', fontWeight: '500' }}>Base App</Link>
        <Link to="/products/appsmith" style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}>Appsmith Integration</Link>
      </nav>
    </header>
  );
}

export default Header;