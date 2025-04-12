import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1.5rem',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}>
      <h2 style={{ color: '#00B7C3' }}>{title}</h2>
      <p style={{ color: '#505C6D', margin: '1rem 0' }}>{description}</p>
      <Link to={link} style={{
        color: '#FF9800',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '1rem'
      }}>Learn More →</Link>
    </div>
  );
}

export default ProductCard;