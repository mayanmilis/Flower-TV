import React, {Component} from 'react'
import Movie from './Movie'
import {Link} from 'react-router-dom'
import Json from '../../../../json files/Movies.json'
import './Movie.css'
import {connect} from 'react-redux'

class AllMovies extends Component{  
    state = {   
        movies: [],
        isLoaded: false
    }

    componentDidMount(){    
            this.setState({ 
                isLoaded: true,
                movies: Json.results
            })
            let list = Json.results
            this.props.mountMovies(list)
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
                      })}
                  </ul>
                </div>
                </div>
                
            )
        }
        
    }
}

const mapDispatchToProps = (dispatch)=>{    
    return{ 
        mountMovies: (list) => dispatch({type: 'MOUNT_MOVIES', list:list})
    }
}

const mapStateToProps = (state)=>{  

    return{ 
        movies: state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
