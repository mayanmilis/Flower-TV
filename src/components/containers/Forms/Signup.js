import React, {Component} from 'react'
import './Signup.css'

class Signup extends Component{ 
    state = {   
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    }

    onChange= (event) =>{    
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    onSubmit= (event) =>{    
        this.setState({ 

        })
    }    


    render(){   
        return( 
            <div className='SignupContainer'>    
                <div className='Signup'>
                <h3>Flower TV</h3>
                <h1>Sign-up</h1> 
                <div className='SignupBreak'></div>
                <div className='SignupForm'>   
                    <form>  
                            <div className='SignupInput'>   
                                <h4>First Name</h4>
                                <input type='text' id='firstName' />
                            </div>
                            <div className='SignupInput'>   
                                <h4>Last Name</h4>
                                <input type='text' id='lastName'/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Phone Number</h4>
                                <input type='text' id='phoneNumber'/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Email</h4>
                                <input type='text' id='email'/>
                            </div>
                            <div className='SignupButton'>   
                                <button>JOIN</button>
                            </div>
                            </form>  
                </div>
                </div>
            </div>
            
        )
    }
}

export default Signup