import React, { useState, useEffect } from 'react';
import StartButton from './StartButton';
import TimerInput from './TimerInput';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [value, setValue] = useState('Set Value');
  const [start, setStart] = useState(false);
  const [titlePart, setTitlePart] = useState('A');

  return (
    <div className="App">
      <header className="App-header d-flex justify-content-center">
        <TimerInput value={ value } startCountdown={ start } />
        <p>
        {titlePart} <span className="text-info font-weight-bold">TIMER</span>. Pretty simple.
        </p>
        <StartButton 
        	variant="outline-info" 
        	text={ start ? 'PAUSE' : 'START' } 
        	handleClick={ (e) => { 
        		setStart(!start); 
        		setTitlePart(start ? 'A stopped' : 'An ongoing') } } />
      </header>
    </div>
    );
}
export default App;