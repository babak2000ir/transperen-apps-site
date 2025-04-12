import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#00B7C3' }}>TransPerEn Solutions for Business Central</h1>
      <p style={{ color: '#505C6D', fontSize: '1.1rem' }}>Modular, scalable apps built to extend Microsoft Dynamics 365 Business Central.</p>
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        marginTop: '3rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <ProductCard 
          title="TransPerEn Base" 
          description="The foundation for all TransPerEn applications." 
          link="/products/base" 
        />
        <ProductCard 
          title="Appsmith Integration" 
          description="Secure APIs and user auth for custom Appsmith frontends." 
          link="/products/appsmith" 
        />
      </div>
    </div>
  );
}

export default Home;