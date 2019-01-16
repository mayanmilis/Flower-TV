import React from 'react'
import './Movie.css'

const movie = (props) =>{    
    let {title,rating,poster,description} = props;
    return( 
        <div className='Movie' style={{backgroundImage:`url(${poster})`}}> 
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

export default movie