import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Details.css'
import '../layout/SideBar/Sidebar.css'
import {NavLink} from 'react-router-dom'

class Details extends Component{    
    
    render(){   
        let {item} = this.props
        let title = item.title ? item.title : item.name
        let release = item.release_date ? item.release_date : item.first_air_date
        let youtube = item.youtube
        console.log(item)
        return( 
                <div className='DashboardContainer'>
                    <div className='Dashboard'> 
                        <div className='DetailsContainer'>
                            <div>
                                <div className='DetailsHeader'>   
                                    <h1>{title}</h1>   
                                    <h1>({release.slice(0,4)})</h1>
                                </div>
                                <h2>IMDB: {item.vote_average}</h2>
                                <div className='DetailsImageContainer'>   
                                    <div className='Image' style={{width: '300px', height: '300px', backgroundImage:`url(${item.poster_path})`}}></div>
                                    <div className='YouTube' ><iframe width="532" height="300" src={youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                                </div>
                            </div> 
                            <div>   
                            </div>
                            <div>   
                            <p>{item.overview}</p>
                            </div>   
                        </div>    
                        <div className='DetailsBtn'>   
                            <NavLink to='/signup'><button>Join</button></NavLink>
                          </div>  
                    </div>

                </div>
        )
    }
}



const mapStateToProps = (state, ownProps)=>{  
    console.log(state, ownProps)
    const id = ownProps.match.params.id
    const movies = state.movies
    const shows = state.shows
    let item
    for(let i =0; i<movies.length; i++){    
        if (movies[i].id===Number(id)){   
             item=movies[i]
             break
        }
    }
    for(let i =0; i<shows.length; i++){    
        if (shows[i].id===Number(id)){   
             item=shows[i]
             break
        }
    }

    
// console.log(id, movies[0].id, item.id)
    return{ 
        item: item
    }
}

export default connect(mapStateToProps)(Details)