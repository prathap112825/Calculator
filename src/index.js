
import React from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css';
import Calculator from './Calculator';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div >
    <App/>
    <Calculator/>
  </div>
  </React.StrictMode>
);

