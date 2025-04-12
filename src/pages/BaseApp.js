import React from 'react';

function BaseApp() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#00B7C3' }}>TransPerEn Base</h1>
      <p style={{ color: '#505C6D' }}><strong>Version:</strong> 25.0.1.0</p>
      <p style={{ color: '#505C6D', lineHeight: '1.6' }}>
        The Base app provides a core platform for all other TransPerEn apps. It includes shared logic,
        data structures, and integrations common across your Business Central extensions.
      </p>
      <h3 style={{ color: '#00B7C3', marginTop: '1.5rem' }}>Features</h3>
      <ul style={{ color: '#505C6D', lineHeight: '1.8' }}>
        <li>Acts as a dependency layer</li>
        <li>Centralized management of shared modules</li>
        <li>Seamless updates for dependent apps</li>
      </ul>
    </div>
  );
}

export default BaseApp;