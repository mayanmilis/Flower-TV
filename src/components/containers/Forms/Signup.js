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
                                <input type='text' id='firstName' placeholder='Enter your first name'/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Last Name</h4>
                                <input type='text' id='lastName' placeholder='Enter your last name'/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Phone Number</h4>
                                <input type='text' id='phoneNumber' placeholder='Enter your phone number'/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Email</h4>
                                <input type='text' id='email' placeholder='Enter your email'/>
                            </div>
                            <div className='Buttons'>   
                                <div className='SignupButton'>   
                                    <button>JOIN</button>
                                </div>
                                <div className='NewUser'>   
                                    <h4>NEW USER?</h4>
                                </div>
                                <div className='SignupButton'>   
                                    <button>GET A FREE MONTH TRIAL </button>
                                </div>
                            </div>

                            </form>  
                </div>
                </div>
            </div>
            
        )
    }
}

export default Signup