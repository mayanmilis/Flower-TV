import React from 'react'
import './Sidebar.css'


const watchAnywhere = () =>{   
    return( 
        <div className='DashboardContainer'>
        <div className='Dashboard'> 
         <h3>Flower TV</h3>
         <h1>Try, Stay.</h1> 
         </div>
         <div className='MostPopular'>
            </div> 
            <div className='WatchAnywhere'>   
                <ul>    
                    <li>    
                        <div>  
                            <p>computer</p> 
                            <i class="fas fa-tv"></i>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
    )
}

export default watchAnywhere