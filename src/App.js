import React, { Component } from 'react';

import './App.css';

import Header from './Header'
import DraftBoard from './DraftBoard'
import Bio from './Bio'

class App extends Component {
  render() {
    return (
      <div>
        <Bio pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="main" className="container-fluid clear-top">
          <Header />
          <DraftBoard />
        </div>
      </div>
    );
  }
}

export default App;
