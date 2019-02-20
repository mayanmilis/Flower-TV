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
        displayModal:''
    }

    onChange= (event) =>{    
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    async createNewUser(newUser){  
        let usersList;
        try { 
            let list = await axios.get('/api/users')
            usersList = list
           }catch (err) {
             console.log('something went wrong', err)
         }
         usersList = usersList.data
         if(usersList.length === 0){    
            try { 
                await axios.post('/api/users', newUser)
                console.log(newUser)
               }catch (err) {
                 console.log('something went wrong', err)
             }
             try { 
                await axios.post('/api/mail', newUser)
                console.log(newUser)
               }catch (err) {
                 console.log('something went wrong', err)
             }
         }else{  
             for(let i=0; i<usersList.length; i++){ 
                if(newUser.email===usersList[i].email||newUser.phoneNumber===usersList[i].phoneNumber){  
                   return alert('Your details is alreay in our system')
                }else{ 
                   try { 
                       await axios.post('/api/users', newUser)
                       console.log(newUser)
                      }catch (err) {
                        console.log('something went wrong', err)
                    }
                    try { 
                        await axios.post('/api/mail', newUser)
                        console.log(newUser)
                       }catch (err) {
                         console.log('something went wrong', err)
                     }
                }

            }
         }
  
         console.log(newUser)
         
         


        
    }

    onSubmit= (event) =>{    
        let nameRegex = /\D\w+/
        let firstName = this.state.firstName
        firstName = firstName.match(nameRegex)[0]
        let lastName = this.state.lastName
        lastName = lastName.match(nameRegex)[0]
        let phoneNumber = this.state.phoneNumber
        let email = this.state.email
        console.log(this.state)
        function strOrgenizer(str){    
            str = str.split(' ')
            for(let i = 0; i<str.length; i++){  
                str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
            }
            return str.join(' ')
        }
    if(firstName&&lastName&&phoneNumber&&email !== ''){
        event.preventDefault()
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
            id: this.state.id+1
        }
        console.log(this.props.users)
        this.createNewUser(newUser);
        console.log(this.props.users)
        let props = this.props
        setTimeout(function(){ props.history.push('/') }, 3000);
        this.setState({ 
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            date: '',
            id: this.state.id+1,
            displayModal:true            
        })

        console.log(this.state)
    }else{  
        return null
    }

    }    


    render(){   
        let modal='none'
        if(this.state.displayModal===true){   
            modal=''
        }
        return( 
            <div className='SignupContainer'>    
                <div className='Signup'>
                <h3>Flower TV</h3>
                <h1>Sign-up</h1> 
                <div className='SignupBreak'></div>
                <div className='SignupFormContainer'>   
                <div className='SignupForm'>   
                    <form onSubmit={this.onSubmit}>  
                            <div className='SignupInput'>   
                                <input type='text' id='firstName' placeholder='First Name' onChange={this.onChange} value={this.state.firstName} required/>
                            </div>
                            <div className='SignupInput'>   
                                <input type='text' id='lastName' placeholder='Last Name' onChange={this.onChange} value={this.state.lastName} required/>
                            </div>
                            <div className='SignupInput'>   
                                <input type='number' id='phoneNumber' placeholder='Phone Number' onChange={this.onChange} value={this.state.phoneNumber} required/>
                            </div>
                            <div className='SignupInput'>   
                                <input type='text' id='email' placeholder='Email' onChange={this.onChange} value={this.state.email} required/>
                            </div>
                            <div className='Buttons'>   
                                <div className='SignupButton'>   
                                    <button>SUBMIT</button>
                                </div>
                            </div>
                            </form>  
                </div>
                <div className='FormModal' style={{display:`${modal}`}}>   
                <h3>Thank You!</h3>
                <p>Our representatives will contact you soon</p>
                </div>
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

const mapStateToProps = (state, ownProps) =>{   
    console.log(state) 
    return{ 
        users: state.users
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)