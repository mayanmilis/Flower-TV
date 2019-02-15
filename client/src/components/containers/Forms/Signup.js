import React, {Component} from 'react'
import './Signup.css'
import {connect} from 'react-redux'
import moment from 'moment'
import axios from 'axios'


class Signup extends Component{ 
    state = {   
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
        id: 0
    }

    onChange= (event) =>{    
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    async createNewUser(newUser){  
        try { 
           await axios.post('/api/users', newUser)
           console.log(newUser)
          }catch (err) {
            console.log('something went wrong', err)
        }
        
    }

    onSubmit= (event) =>{    
        let nameRegex = /\D\w+/
        let firstName = this.state.firstName
        firstName = firstName.match(nameRegex)[0]
        let lastName = this.state.lastName
        lastName = lastName.match(nameRegex)[0]
        let phoneNumber = this.state.phoneNumber
        let email = this.state.email
        let id = this.state.id
        console.log(this.state)
        function strOrgenizer(str){    
            str = str.split(' ')
            for(let i = 0; i<str.length; i++){  
                str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
            }
            return str.join(' ')
        }
    if(firstName&&lastName&&phoneNumber&&email !== ''){
        // event.preventDefault()
        if(Number.isInteger(phoneNumber)){  
            return phoneNumber
        }else{  
            phoneNumber = ''
        }
        let newUser = {
            firstName: strOrgenizer(firstName),
            lastName: strOrgenizer(lastName),
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            date: this.state.date,
            id: this.state.id
        }
        console.log(newUser)
        this.createNewUser(newUser);
        this.setState({ 
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            date: '',
            id: this.state.id+1
        })
        console.log(this.state)
    }else{  
        return null
    }

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
                                <input type='text' id='firstName' placeholder='Enter your first name' onChange={this.onChange} value={this.state.firstName} required/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Last Name</h4>
                                <input type='text' id='lastName' placeholder='Enter your last name' onChange={this.onChange} value={this.state.lastName} required/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Phone Number</h4>
                                <input type='number' id='phoneNumber' placeholder='Enter your phone number' onChange={this.onChange} value={this.state.phoneNumber} required/>
                            </div>
                            <div className='SignupInput'>   
                                <h4>Email</h4>
                                <input type='text' id='email' placeholder='Enter your email' onChange={this.onChange} value={this.state.email} required/>
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