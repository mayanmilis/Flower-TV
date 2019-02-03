import React, { Component } from 'react'
import Dashboard from './components/containers/dashboard/dashboard'
import Navbar from './components/containers/layout/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from '../src/components/containers/Forms/Signup'
import Library from './components/containers/content/Library'
import Yona from './components/containers/content/Yona'
import ChoosePlan from './components/containers/layout/SideBar/ChoosePlan'
import WatchAnywhere from './components/containers/layout/SideBar/WatchAnywhere'
import Details from './components/containers/content/Details'
import showsJson from './json files/Shows.json'
import moviesJson from './json files/Movies.json'
import {connect} from 'react-redux'

class App extends Component {
  state = { 
    isLoaded: false
  }
  componentDidMount(){    
    let showsList = showsJson.results
    this.props.mountShows(showsList)
    let moviesList = moviesJson.results
    this.props.mountMovies(moviesList)
    this.setState({ 
      isLoaded: true
    })
}

  render() {
    let {isLoaded} = this.state
    if(isLoaded===false){ 
      return <p>Loading...</p>
    }else{  
      return (
        <BrowserRouter> 
        <div> 
          <Navbar/>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/details/:id' component={Details}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/library' component={Library}/>
                <Route path='/chooseplan' component={ChoosePlan}/>
                <Route path='/watchanywhere' component={WatchAnywhere}/>
  
        </div>
        </BrowserRouter>
  
      );
    }

  }
}

const mapDispatchToProps = (dispatch)=>{    
  return{ 
      mountShows: (list) => dispatch({type: 'MOUNT_SHOWS', list:list}),
      mountMovies: (list) => dispatch({type: 'MOUNT_MOVIES', list:list})
  }
}

const mapStateToProps = (state)=>{  
console.log(state)
  return{ 
      shows: state.shows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
