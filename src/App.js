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
      <BrowserRouter basename={"/chris-tool/"} >
        <Switch>
          <Route path={"/"} component={Home} exact={true}></Route>
          <Route path={"/test"} component={Test} exact={false}></Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;