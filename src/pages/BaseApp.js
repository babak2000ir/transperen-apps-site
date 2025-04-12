import React from 'react';

function BaseApp() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>TransPerEn Base</h1>
      <p><strong>Version:</strong> 25.0.1.0</p>
      <p>
        The Base app provides a core platform for all other TransPerEn apps. It includes shared logic,
        data structures, and integrations common across your Business Central extensions.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Acts as a dependency layer</li>
        <li>Centralized management of shared modules</li>
        <li>Seamless updates for dependent apps</li>
      </ul>
    </div>
  );
}

export default BaseApp;