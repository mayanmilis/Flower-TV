import React, {Component} from 'react'
import './Signup.css'

class Signup extends Component{ 
    state = {   

    }

    render(){   
        return( 
            <div className='SignupContainer'>    
                <div className='SignupForm'>
                    <form>  
                        <div>   
                        <span>Name</span>
                        <input type='text'/>
                        </div>
                        </form>   
                </div>
            </div>
            
        )
    }
}

export default Signup