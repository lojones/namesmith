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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px'
  };

  const textStyle = {
    textAlign: 'justify',
    width: 'fit-content'
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#999',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 'normal',
    marginTop: '5px'
  };

  return (
    <div style={logoStyle}>
      <span style={textStyle}>Namesmith</span>
      <span style={taglineStyle}>Get ideas for naming things</span>
    </div>
  );
}

export default NSLogo; 