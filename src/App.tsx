import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AppNavBar from './shared/components/AppNavBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppNavBar/>
      </div>
    </Router>
  );
}

export default App;
