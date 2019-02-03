import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Movie from './Movie'
import Json from '../../../../json files/Movies.json'
import './Movie.css'

class Movies extends Component{  
    state = {   
        movies: [],
        isLoaded: false
    }

    componentDidMount(){    
            this.setState({ 
                isLoaded: true,
                movies: Json.results
            })
    }

    render(){   
        let {isLoaded, movies} = this.state;

        if(!isLoaded){  
            return <div>Loading...</div>
        }else{  
            return( 
                <div>   
                <div className='Container'>   
                  <ul>  
                      {movies&&movies.map(movie => {   
                          return(   
                              <Link to={'/details/'+ movie.id} key={movie.id}> 
                              <div>
                              <Movie
                              id={movie.id}
                              title={movie.title}
                              rating={movie.vote_average}
                              poster={movie.poster_path}
                              description={movie.overview}
                              />
                              </div></Link>
                          )
                      }).slice(0,10)}
                  </ul>
                </div>
                  <div className='AllMovies'> 
                      <NavLink to='library'>All Movies <i className="fas fa-angle-double-right"></i></NavLink>
                  </div>
                </div>
                
            )
        }
        
    }
}

export default Movies