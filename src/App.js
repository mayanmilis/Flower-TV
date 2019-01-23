import React, { Component } from 'react'
import Dashboard from './components/containers/dashboard/dashboard'
import Navbar from './components/containers/layout/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from '../src/components/containers/Forms/Signup'
import Library from './components/containers/content/Library'
import ChoosePlan from './components/containers/layout/SideBar/ChoosePlan'
import WatchAnywhere from './components/containers/layout/SideBar/WatchAnywhere'
import Details from './components/containers/content/Details'

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div> 
        <Navbar/>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/library' component={Library}/>
              <Route path='/chooseplan' component={ChoosePlan}/>
              <Route path='/watchanywhere' component={WatchAnywhere}/>
              <Route path='/details/:id' component={Details}/>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
