import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Content from './components/content/Content';



function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
