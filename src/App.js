// src/App.js
import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Home from './components/Home';
import './components/index.css';
import './App.css';

function App() {
 
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('name') || '';
  });

 
  const handleUsernameSubmit = (newUsername) => {
    setUsername(newUsername); 
    localStorage.setItem('name', newUsername);
  };

  return (
    <div className='stars'>
      <Greeting username={username} />
      <Home onSubmit={handleUsernameSubmit} />
    </div>
  );
}

export default App;
