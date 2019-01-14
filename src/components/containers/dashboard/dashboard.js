import React, {Component} from 'react'
import './dashboard.css'

class Dashboard extends Component{  
    state = {   
        movies: [],
        isLoaded: false
    }

    componentDidMount(){    
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cedd24c4edcede6d24d8a7a4fa455149&language=en-US&page=1')
        .then(res => res.json())
        .then(json => { 
            this.setState({ 
                isLoaded: true,
                movies: json.results
            })
        });
    }

    render(){   
        let {isLoaded, movies} = this.state;

        if(!isLoaded){  
            return <div>Loading...</div>
        }else{  
            return( 
                <div className='Dashboard'>   
                  <ul>  
                      {movies&&movies.map(movie => {   
                          return(   
                              <li>{movie.title}</li>
                          )
                      })}
                  </ul>
                </div>
            )
        }
        
    }
}

export default Dashboard