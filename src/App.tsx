
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

import {Header} from './components'

import {Login, Signup, Home} from './pages'

export interface Props {

}

class App extends React.Component<Props, object>{

  constructor(props: Props) {
    super(props);
  } 

  render() {
    const auth = true;
    return (
        
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </Switch>

        </Router>
    )
  }
}



export default App;
