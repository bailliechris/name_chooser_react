import React from 'react';
import { Nav } from './components/navbar';
import { Footer } from './components/footer';
import { Container } from './styles/backgrounds';
import { Route, Switch } from "react-router-dom";
import { Landing } from './app/views/landing';
import { Register } from './app/views/register';
import { ShowClasses } from './app/views/classes';

function App() {
  return (
      <Container>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/classes">
              <ShowClasses />
          </Route>
        </Switch>
        <Footer />
      </Container>
  );
}

export default App;
