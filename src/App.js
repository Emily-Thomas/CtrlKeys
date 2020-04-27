import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './pages/Home';
import Login from './pages/Login';
import Lessons from './pages/Lessons';
import Lesson from './pages/Lesson';
import Header from './components/Header';
import { useAuth0 } from './react-auth0-spa';

export default function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Box>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/lessons">
            <Lessons />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}
