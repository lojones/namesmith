import React from 'react';

function NSLogo() {
  const logoStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#87cefa',
    textAlign: 'justify',
    width: '100%',
    padding: '20px 0',
    fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textStyle = {
    textAlign: 'justify',
    width: 'fit-content'
  };

  return (
    <div style={logoStyle}>
      <span style={textStyle}>Namesmith</span>
    </div>
  );
}

export default NSLogo; 