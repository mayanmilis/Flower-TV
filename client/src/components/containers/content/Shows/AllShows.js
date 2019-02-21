import React, {Component} from 'react'
import Show from './Show'
import {Link} from 'react-router-dom'
import './Show.css'
import {connect} from 'react-redux'

class AllShows extends Component{  

    render(){   
        const {shows} = this.props;
        
            return( 
                <div>   
                    <div className='Container'>   
                    <ul>  
                        {shows&&shows.map(show => {   
                            return(   
                                <Link to={'/details/'+ show.id} key={show.id}>
                                <div>
                                <Show
                                id={show.id}
                                title={show.name}
                                rating={show.vote_average}
                                poster={show.poster_path}
                                description={show.overview}
                                />
                                </div>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                </div>
                
            )
        }
        
    }


const mapDispatchToProps = (dispatch)=>{    
    return{ 
        mountShows: (list) => dispatch({type: 'MOUNT_SHOWS', list:list})
    }
}

const mapStateToProps = (state)=>{  
console.log(state)
    return{ 
        shows: state.shows
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllShows)