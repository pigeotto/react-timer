import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartButton from './StartButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A <code>TIMER</code>. Pretty simple.
        </p>
        <StartButton variant="outline-info" />
      </header>
    </div>
  );
}

export default App;
