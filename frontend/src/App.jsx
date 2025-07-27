import React, { useState } from 'react';

function App() {
  const [fortune, setFortune] = useState('');

  const fetchFortune = async () => {
    const response = await fetch('/api/fortune');
    const data = await response.json();
    setFortune(data.fortune);
  };

  return (
    <div style={styles.container}>
      <h1>ツンデレ占い React版</h1>
      <button onClick={fetchFortune} style={styles.button}>
        占ってみる？…別にアンタのためじゃないけど！
      </button>
      <p style={styles.result}>{fortune}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#fff0f5',
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '20px',
    color: '#800080',
  },
};

export default App;
