import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import { ThemeProvider, Container } from '@material-ui/core';
import theme from './theme';
import { Person } from './components/personselect';
import WeekPage from './components/weekpage';
import useStyles from './styles';

function App() {
  const [user, setUser] = useState<Person | undefined>(undefined);
  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Header user={user} setUser={p => setUser(p)} />
          <Container
              className={classes.container}
              maxWidth='lg'
          >
            <Switch>
              <Route path='/week/:id'>
                <WeekPage user={user} />
              </Route>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
  );
}

export default App;
