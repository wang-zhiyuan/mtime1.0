import React, { Component } from 'react';
import Scrooltop from './components/Scrooltop';
import './components/Scrooltop/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.children
        }
        <Scrooltop></Scrooltop>
      </div>
    );
  }
}

export default App;
