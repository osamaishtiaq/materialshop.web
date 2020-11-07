import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import SignIn from './components/pages/auth/signIn';
import ProductDetail from './components/product-details/productDetail';
import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
            <Route path='/' exact>
              <div style={{marginTop: '100px'}}>
                <Link to='/cat'>Categories</Link>
              </div>
            </Route>
            <Route path="/cat">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/productDetail">
              <ProductDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
