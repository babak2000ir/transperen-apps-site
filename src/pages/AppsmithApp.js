import React from 'react';

function AppsmithApp() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Appsmith Integration</h1>
      <p><strong>Version:</strong> 25.0.4.1</p>
      <p>
        This app provides a secure backend interface between Appsmith and Business Central. With
        token-based authentication and BC entity APIs, it's perfect for internal dashboards and customer portals.
      </p>
      <h3>Highlights</h3>
      <ul>
        <li>Login + Token Auth</li>
        <li>REST APIs for BC data</li>
        <li>Requires TransPerEn Base</li>
      </ul>
    </div>
  );
}

export default AppsmithApp;