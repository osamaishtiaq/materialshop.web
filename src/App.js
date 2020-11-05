import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/navbar';
import React  from 'react';

class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      cart: {},
      user: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
