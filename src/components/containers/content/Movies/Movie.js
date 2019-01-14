import React from 'react'
import './Movie.css'

const movie = (props) =>{    
    let {title,rating,poster,description} = props;
    return( 
        <div className='Movie' style={{backgroundImage:`url(${poster})`}}>   
            <header>
                {title}
                {rating}
            </header>
            <footer>   
              {description}
            </footer>
            
            
        </div>
    )
}

export default movie