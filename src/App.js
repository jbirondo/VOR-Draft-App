import React, { Component } from 'react';

import './App.css';

import Header from './Header'
import DraftBoard from './DraftBoard'
import Bio from './Bio'

class App extends Component {
  render() {
    return (
      <div id="main" className="container-fluid clear-top">
        <Bio pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <Header />
        <DraftBoard />
      </div>
    );
  }
}

export default App;
