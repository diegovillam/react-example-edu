import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ListAlbums from './ListAlbums/ListAlbums';
import Album from './Album/Album';
import Photo from './Photo/Photo';

export default function() {
  return (
    <Router>
      <Switch>
        <Route exact path="/albums/:id">
          <Album />
        </Route>
        <Route exact path="/photos/:id">
          <Photo />
        </Route>
        <Route exact path="/">
          <ListAlbums />
        </Route>
      </Switch>
    </Router>
  );
}