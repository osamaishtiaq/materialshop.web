import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import SignIn from './components/pages/auth/signIn';
import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      cart: {},
      user: {},
      isLogedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/cat">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
