import React, { Component } from 'react'
import Dashboard from './components/containers/dashboard/dashboard'
import Navbar from './components/containers/layout/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from '../src/components/containers/Forms/Signup'
import Library from './components/containers/content/Library'
import ChoosePlan from './components/containers/layout/SideBar/ChoosePlan'
import WatchAnywhere from './components/containers/layout/SideBar/WatchAnywhere'
import Details from './components/containers/content/Details'
import showsJson from './json files/Shows.json'
import moviesJson from './json files/Movies.json'
import {connect} from 'react-redux'
import axios from 'axios'
import UsersList from './components/containers/content/UsersList'
import Login from './components/containers/content/Login'
import {mountMovies,mountShows} from './Store/actions'

class App extends Component {
  state = { 
    isLoaded: false
  }
  componentDidMount(){ 
    this.fetchAllMoviesData();
}
  
async fetchAllMoviesData (){

  // let showsArr = showsJson.results
  // for(let i=0; i<showsArr.length; i++){  
  //   try { 
  //     await axios.post('/api/shows', showsArr[i]);
  //   }catch (err) {
  //     console.log('something went wrong')
  // }
  // }
  // let moviesArr = moviesJson.results
  // for(let i=0; i<moviesArr.length; i++){  
  //   try { 
  //     await axios.post('/api/movies', moviesArr[i]);
  //   }catch (err) {
  //     console.log('something went wrong')
  // }
  // }
// let admin = { 
//   "email": "mayanmilis@gmail.com",
//   "password": "123456"
// }

//     try { 
//       await axios.post('/api/admin', admin);
//     }catch (err) {
//       console.log('something went wrong')
//   }


//   let moviesList = []; 
//   try { 
//     moviesList = await axios.get('/api/movies');
//   }catch (err) {
//     console.log('Something went wrong', err);
// }

// moviesList = moviesList.data

let showsList = []; 
try { 
  showsList = await axios.get('/api/shows');
}catch (err) {
  console.log('Something went wrong', err);
}
showsList = showsList.data

//     // let showsList = showsJson.results
    this.props.mountShows(showsList)
//     // let moviesList = moviesJson.results
    this.props.mountMovies()
//     this.setState({ 
//       isLoaded: true
//     })

// this.props.mountMovies()
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
                <Route path='/userslist' component={UsersList}/>
  
        </div>
        </BrowserRouter>
  
      );
    }

  }
}

const mapDispatchToProps = (dispatch)=>{    
  return{ 
      mountShows: (list) => dispatch(mountShows(list)),
      mountMovies: () => dispatch(mountMovies())
  }
}

const mapStateToProps = (state)=>{  
console.log(state)
  return{ 
      shows: state.shows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
