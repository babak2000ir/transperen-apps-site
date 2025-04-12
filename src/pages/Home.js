import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>TransPerEn Solutions for Business Central</h1>
      <p>Modular, scalable apps built to extend Microsoft Dynamics 365 Business Central.</p>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
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