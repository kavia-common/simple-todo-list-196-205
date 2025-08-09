import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common.css';
import './todo_page.css'; // Ensures design tokens and todo styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
