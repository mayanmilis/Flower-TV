import React, {Component} from 'react'
import Show from './Show'
import {NavLink, Link} from 'react-router-dom'
import './Show.css'
import {connect} from 'react-redux'

class Shows extends Component{  

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
                        }).slice(0,10)}
                    </ul>
                </div>
                  <div className='AllShows'> 
                  <NavLink to='library'>All Shows <i className="fas fa-angle-double-right"></i></NavLink>
                  </div>
                </div>
                
            )
        }
        
    }


const mapStateToProps = (state)=>{  
    console.log(state)
        return{ 
            shows: state.shows
        }
    }
    
    export default connect(mapStateToProps)(Shows)