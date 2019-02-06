import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Movie from './Movie'
import './Movie.css'
import {connect} from 'react-redux'

class Movies extends Component{  

    render(){   
        const {movies} = this.props
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

const mapStateToProps = (state)=>{  

    return{ 
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Movies)