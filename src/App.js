import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import SignIn from './components/pages/auth/signIn';
import ProductDetail from './components/product-details/productDetail';
import SubCategory from './components/sub-category/subCategory';
import React from 'react';
import {Container } from '@material-ui/core';
import {
  HashRouter as Router,
  Switch,
  Route
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
        <Router>
          <Navbar />
          <div style={{ marginTop: "80px" }}></div>
          <Container maxWidth="lg">

            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path={`/categories/:id/:name`}>
                <SubCategory />
              </Route>
              <Route path={`/productdetail/:id`}>
                <ProductDetail />
              </Route>
            </Switch>

          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
