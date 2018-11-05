import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import Scrooltop from './components/Scrooltop';
import './components/Scrooltop/index.scss';
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.children
        }
<<<<<<< HEAD
=======
        <Scrooltop></Scrooltop>
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
      </div>
    );
  }
}

export default App;
