import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.scss';
import AppNavbar from './shared/components/AppNavbar';
import Home from './features/home/presentation/pages/Home';
import Rsvp from './features/rsvp/presentation/pages/Rsvp';
import Social from './features/social/presentation/pages/Social';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>

        <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/rsvp">
              <Rsvp/>
            </Route>
            <Route exact path="/social">
              <Social/>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
