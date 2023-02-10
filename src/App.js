import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Test from './Test';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"} >
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact={true}></Route>
          <Route path={process.env.PUBLIC_URL + "/test"} component={Test} exact={false}></Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;