import React from 'react';
import './App.css';
import { Cheader } from './components/cheader/Cheader';
import { Nav } from './components/nav/Nav';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
        <Sidebar></Sidebar>
        <div className="central">
          <Cheader></Cheader>
        </div>
      </div>
    </div>
  );
}

export default App;
