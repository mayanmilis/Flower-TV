import React, {Component} from 'react'
import './Signup.css'
import {connect} from 'react-redux'

class Signup extends Component{ 
    state = {   
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        id: 0
    }

    onChange= (event) =>{    
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    onSubmit= (event) =>{    
        event.preventDefault();
        this.props.newUser(this.state)
        let id = this.state.id+1
        this.setState({ 
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            id: id
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
                    <form onSubmit={this.onSubmit}>  
                            <div className='SignupInput'>   
                                <h4>First Name</h4>
                                <input type='text' id='firstName' placeholder='Enter your first name' onChange={this.onChange}/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Last Name</h4>
                                <input type='text' id='lastName' placeholder='Enter your last name' onChange={this.onChange}/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Phone Number</h4>
                                <input type='text' id='phoneNumber' placeholder='Enter your phone number' onChange={this.onChange}/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Email</h4>
                                <input type='text' id='email' placeholder='Enter your email' onChange={this.onChange}/>
                            </div>
                            <div className='Buttons'>   
                                <div className='SignupButton'>   
                                    <button>SUBMIT</button>
                                </div>
                            </div>

                            </form>  
                </div>
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) =>{    
    return{ 
        newUser: (user) => dispatch({type: 'NEW_USER', user: user})
    }
}

const mapStateToProps = (state) =>{   
    console.log(state) 
    return{ 
        users: state.users
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)