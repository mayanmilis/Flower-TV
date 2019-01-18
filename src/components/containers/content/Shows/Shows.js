import React, {Component} from 'react'
import Show from './Show'
import Json from '../../../../json files/Shows.json'
import './Show.css'

class Shows extends Component{  
    state = {   
        shows: [],
        isLoaded: false
    }

    componentDidMount(){    
            this.setState({ 
                isLoaded: true,
                shows: Json.results
            })
    }

    render(){   
        let {isLoaded, shows} = this.state;

        if(!isLoaded){  
            return <div>Loading...</div>
        }else{  
            return( 
                <div>   
                    <div className='Container'>   
                    <ul>  
                        {shows&&shows.map(show => {   
                            return(   
                                <div>
                                <Show
                                key={show.id}
                                title={show.name}
                                rating={show.vote_average}
                                poster={show.poster_path}
                                description={show.overview}
                                />
                                </div>
                            )
                        }).slice(0,10)}
                    </ul>
                </div>
                
                  <div className='AllShows'> 
                      All TV Shows <i class="fas fa-angle-double-right"></i>
                  </div>
                </div>
                
            )
        }
        
    }
}

export default Shows