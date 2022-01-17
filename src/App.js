import logo from './zs.jpg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import Welcome from './Welcome.jsx';
//let value = document.getElementById("fname").value;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <Counter/>
        <a
          className="App-link"
          href="https://github.com/zstem"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"GitHub"}
        </a>
      </header>
    </div>
  );
}


export default App;
