import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import TheContent from 'containers/TheContent';
import './style.css';

const App = () => {
  return (
    <Grid>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TheContent} />
        </Switch>
      </BrowserRouter>
    </Grid>
  );
};

export default App;
