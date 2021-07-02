import React from 'react';
import { Nav } from './components/navbar';
import { Footer } from './components/footer';
import { Container } from './styles/backgrounds';
import {Route, Switch} from "react-router-dom"
import { Landing } from './app/views/landing';

function App() {
  return (
      <Container>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </Container>
  );
}

export default App;
