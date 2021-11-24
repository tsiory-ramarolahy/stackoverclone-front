import React from 'react';
import './App.css';
import { Nav } from './components/nav/Nav';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
