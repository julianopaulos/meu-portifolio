import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
