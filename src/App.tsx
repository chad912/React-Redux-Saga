
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

// import Header from 'pages/header'

// import Home from 'pages/home'
// import Signup from 'pages/Signup'
// import Login from 'pages/Login'

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

const Header = () => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  )
}

const Home = () => <div>Home</div>

const Login = () => <div>Login</div>

const Signup = () => <div>Signup</div>



export default App;
