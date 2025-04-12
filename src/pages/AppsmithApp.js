import React from 'react';

function AppsmithApp() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#FF9800' }}>Appsmith Integration</h1>
      <p style={{ color: '#505C6D' }}><strong>Version:</strong> 25.0.4.1</p>
      <p style={{ color: '#505C6D', lineHeight: '1.6' }}>
        This app provides a secure backend interface between Appsmith and Business Central. With
        token-based authentication and BC entity APIs, it's perfect for internal dashboards and customer portals.
      </p>
      <h3 style={{ color: '#FF9800', marginTop: '1.5rem' }}>Highlights</h3>
      <ul style={{ color: '#505C6D', lineHeight: '1.8' }}>
        <li>Login + Token Auth</li>
        <li>REST APIs for BC data</li>
        <li>Requires TransPerEn Base</li>
      </ul>
    </div>
  );
}

export default AppsmithApp;