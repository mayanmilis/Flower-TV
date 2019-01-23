import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'


const watchAnywhere = () =>{   
    return( 
        <div className='DashboardContainer'>
        <div className='Dashboard'> 
         <h3>Flower TV</h3>
         <h1>Watch Anywhere</h1> 
         </div>
         <div className='MostPopular'>
            </div> 
            <div className='WatchAnywhere'>   
                <ul>    
                    <li>    
                        <div className='WatchAnywhereDetails'>  
                            <i className="fas fa-tv"></i>
                            <h4>Tv</h4> 
                            <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                    </li>
                    <li>    
                        <div className='WatchAnywhereDetails'>  
                         <i className="fas fa-laptop"></i>
                            <h4>Computer</h4> 
                            <p>Watch right on FlowerTV.com.</p>
                        </div>
                    </li>
                    <li>    
                        <div className='WatchAnywhereDetails'>  
                        <i className="fas fa-mobile-alt"></i>
                            <h4>Smartphones</h4> 
                            <p>Available on phone and tablet, wherever you go.</p>
                        </div>
                    </li>
                </ul>
                <div className='WatchAnywhereBtn'>   
                      <NavLink to='/signup'><button>Join</button></NavLink>
                </div>
               
            </div>
    </div>
    )
}

export default watchAnywhere