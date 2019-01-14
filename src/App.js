import React, { Component } from 'react'
import Dashboard from './components/containers/dashboard/dashboard'
import Navbar from './components/containers/layout/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Dashboard/>

      </div>
    );
  }
}

export default App;
