import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Header from './component/Hearder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <Header/> 
    <div id='page'>
    <Home />
    </div>
  </div>
    
  </React.StrictMode>
);

