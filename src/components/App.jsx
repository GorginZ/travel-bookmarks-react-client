import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Bookmarks from './Bookmarks'
import NoMatch from './NoMatch'
import NavBar from '../shared/NavBar'
import CreateBookmark from './CreateBookmark'
import EditBookmark from './EditBookmark'

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route exact path="/bookmarks/create" component={CreateBookmark} />
          <Route exact path="/bookmarks/:id/edit" component={EditBookmark} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;