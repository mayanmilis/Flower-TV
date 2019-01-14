import React from 'react'
import  './Navbar.css'

const navbar = (props) => {  
    
    return( 
        <div className='Navbar'>   
            <nav>   
                <ul>   
                <li><a href='http://localhost:3000/'>Flower TV</a></li>
                    <div className='Burger'>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>  
                </ul>
            </nav>
        </div>

    )
}

export default navbar