import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App'

/* 
const root = document.querySelector('#root')

ReactDOM.render(<App />, root)     ci sono stati conflitti perchè con react 18 non sembra più funzionare sto metodo*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);