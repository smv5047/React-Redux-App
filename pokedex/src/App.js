import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Cards from "./components/Cards"
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <h1>Gotta Catch 'Em All!</h1>
      <Button/>
      <Cards/>
    </div>
  );
}

export default App;
