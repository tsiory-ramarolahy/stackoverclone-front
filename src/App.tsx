import React from 'react';
import './App.css';
import { Cheader } from './components/cheader/Cheader';
import { Nav } from './components/nav/Nav';
import { Sidebar } from './components/sidebar/Sidebar';
import { Questions } from './components/questions/Questions';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div className="content">
          <Switch>
            <Route path="/">
              <Sidebar></Sidebar>
              <div className="central">
                <Cheader></Cheader>
                <Questions></Questions>
              </div>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
