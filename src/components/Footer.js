import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center', 
      marginTop: '4rem', 
      padding: '2rem', 
      backgroundColor: '#505C6D', /* Business Central Gray */
      color: 'white'
    }}>
      <p>© {new Date().getFullYear()} TransPerEn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;