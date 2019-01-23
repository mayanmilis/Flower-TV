import React from 'react'
import './Show.css'

const showDetails = (props) =>{    
    let {title,rating,poster,description} = props;
    return( 
        <div className='Show' style={{backgroundImage:`url(${poster})`}}> 
          <div className='Fade'>   
                <div className='Title'>  
                        <h1>{title}</h1>
                        <h4>IMDB: {rating}</h4> 
                        <div className='Description'>    
                             {description}
                         </div> 
                 </div>

         </div>
        </div>
    )
}

export default showDetails