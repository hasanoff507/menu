import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.global.css';
import App from './App';
import "leaflet/dist/leaflet.css"
import './'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

