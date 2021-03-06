import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Products" component={Products} />
  </Switch>
);

export default Routes;
