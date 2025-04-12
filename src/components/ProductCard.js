import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      width: '300px',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>Learn More →</Link>
    </div>
  );
}

export default ProductCard;