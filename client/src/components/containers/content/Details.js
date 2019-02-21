import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Details.css'
import '../layout/SideBar/Sidebar.css'

class Details extends Component{    
    
    render(){   
        let {item, goBack} = this.props
        let title = item.title ? item.title : item.name
        let release = item.date ? item.date : null
        let youtube = item.youtube
        console.log(item)
        return( 
                <div className='DashboardContainer'>
                    <div className='Dashboard'> 
                        <div className='DetailsContainer'>
                        <div className='DetailsHeaderAndVideo'>   
                        <div className='DetailsHeaderAndRate'>
                                <div className='DetailsHeader'>   
                                    <h1>{title}</h1>   
                                    <h1>({release.slice(0,4)})</h1>
                                </div>
                                <h2>IMDB: {item.vote_average}</h2>
                            </div> 
                            <div className='Youtube' >
                                 <iframe width="600" height="350" src={youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div> 
                        </div>
                            <div  className='DetailsSummary'>   
                                <h2>Summary</h2>
                            </div>
                            <div className='DetailsDescription'>
                                <p>{item.overview}</p>
                            </div>   
                        </div>    
                        <div className='DetailsBtn'>   
                            <button onClick={goBack}>Back</button>
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
    const goBack = ownProps.history.goBack
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
        item: item,
        goBack: goBack
    }
}

export default connect(mapStateToProps)(Details)