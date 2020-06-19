import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';

import Home from './routes/home';
import Cv from './routes/cv';
import Proyectos from './routes/proyectos';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/proyectos">
            <Proyectos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
