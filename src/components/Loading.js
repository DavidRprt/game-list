import React from 'react';

const Loading = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    circle: {
      display: 'block',
      width: '60px',
      height: '60px',
      margin: 'auto',
      borderTop: '6px solid #3498db',
      borderRight: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: '6px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s ease-in-out infinite',
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.circle}></span>
    </div>
  )
}

const keyframes = `
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const style = document.createElement('style')
style.innerHTML = keyframes
document.getElementsByTagName('head')[0].appendChild(style)

export default Loading