import React from 'react'
import AllMovies from './Movies/AllMovies'
import AllShows from './Shows/AllShows'
import '../dashboard/dashboard.css'


const library = () =>{  
    return( 
        <div className='DashboardContainer'>
        <div className='Dashboard'> 
         <h3>Flower TV</h3>
         <h1>Library</h1> 
         </div>
         <div className='MostPopular'>
            <p>Movies</p>
            </div> 
            <div className='Movies'>   
            <AllMovies/>
            </div>

        <div className='MostPopular'>   
            <p>TV Shows</p>
            </div>
            <div className='Shows'>   
            <AllShows/>
            </div>
        
    </div>
    )
}
export default library