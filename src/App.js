import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState(
    'Welcome to Numbers Trivia!'
  );

  useEffect(() => {
    setTimeout(() => {
      setWelcomeMessage('Try Out Our Trivia Generator!');
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcomeMessage">{welcomeMessage}</h1>
        <div id="result" style={{ marginBottom: '15px' }}></div>
        <Form />
      </header>
    </div>
  );
}

export default App;
