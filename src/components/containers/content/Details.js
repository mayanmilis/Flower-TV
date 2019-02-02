import React, { Component } from 'react'
import {connect} from 'react-redux'

class Details extends Component{    
    
    render(){   
        // const { id, title, rating, description, poster } = props;
        return( 
            <div> 
                Title: 
                Rating: 
                Description: 
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps)=>{  
    const id = ownProps.match.params.id
    
console.log(ownProps)
    return{ 
        movies: state.movies,
        shows: state.shows
    }
}

export default connect(mapStateToProps)(Details)
