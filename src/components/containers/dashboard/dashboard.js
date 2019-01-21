import React, {Component} from 'react'
import './dashboard.css'
import Movies from '../content/Movies/Movies'
import Shows from '../content/Shows/Shows'

class Dashboard extends Component{  

    render(){
        return( 
            <div className='DashboardContainer'>
                <div className='Dashboard'> 
                 <h3>Flower TV</h3>
                 <h1>Try, Stay.</h1> 
                 </div>
                 <div className='MostPopular'>
                    <p>Most Popular Movies</p>
                    </div> 
                <Movies/>
                <div className='MostPopular'>   
                    <p>Most Popular TV Shows</p>
                    </div>
                <Shows/>
            </div>
        )
    }
}


export default Dashboard