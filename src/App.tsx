import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import './App.css';
import './custom.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
