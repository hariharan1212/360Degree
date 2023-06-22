import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css';

export default function Index (){

  return(
   <App/>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Index />
);
