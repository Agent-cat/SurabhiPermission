import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (process.env.NODE_ENV === 'production') {
  console.clear();
  console.log = () => { };
  console.error = () => { };
  console.warn = () => { };
  console.debug = () => { };
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
