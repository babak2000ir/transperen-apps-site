import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#f5f5f5', padding: '1rem 2rem' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/products/base" style={{ marginRight: '1rem' }}>Base App</Link>
        <Link to="/products/appsmith">Appsmith Integration</Link>
      </nav>
    </header>
  );
}

export default Header;