import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './container/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
