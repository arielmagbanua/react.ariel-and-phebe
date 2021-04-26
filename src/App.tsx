import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AppNavbar from './shared/components/AppNavbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
      </div>
    </Router>
  );
}

export default App;
