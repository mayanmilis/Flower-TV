import React, {Component} from 'react'
import './dashboard.css'

import Movies from '../content/Movies/Movies'

class Dashboard extends Component{  

    render(){
        return( 
            <div>
                <div className='Dashboard'> 
                 <h3>Flower TV</h3>
                 <h1>Try, Stay.</h1> 
                 <hr/> 
                 </div>
                 <div className='MostPopular'>Most Popular</div> 
                <Movies/>
            </div>
        )
    }
}


export default Dashboard