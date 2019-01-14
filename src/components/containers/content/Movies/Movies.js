import React, {Component} from 'react'
import Movie from './Movie'
import Json from '../../../../json files/Movies.json'

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
                <div className='Movies'>   
                  <ul>  
                      {movies&&movies.map(movie => {   
                          return(   
                              <div>
                              <Movie
                              key={movie.id}
                              title={movie.title}
                              rating={movie.vote_average}
                              poster={movie.poster_path}
                              description={movie.overview}
                              />
                              </div>
                          )
                      })}
                  </ul>
                </div>
            )
        }
        
    }
}

export default Movies