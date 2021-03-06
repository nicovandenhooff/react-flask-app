import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

// time function
function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('https://react-flask-app-toy.herokuapp.com/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;