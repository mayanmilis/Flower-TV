import React, {Component} from 'react'
import './dashboard.css'

import Movies from '../content/Movies/Movies'

class Dashboard extends Component{  

    render(){
        return( 
            <div className='Dashboard'> 
            <h3>Movies</h3>
            <hr/>
                <Movies/>
            </div>
        )
    }
}


export default Dashboard