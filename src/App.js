import React, { Component } from 'react'
import Dashboard from './components/containers/dashboard/dashboard'
import Navbar from './components/containers/layout/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from '../src/components/containers/Forms/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div> 
        <Navbar/>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/signup' component={Signup}/>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
