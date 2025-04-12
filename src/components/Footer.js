import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '1rem', backgroundColor: '#eee' }}>
      <p>© {new Date().getFullYear()} TransPerEn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;