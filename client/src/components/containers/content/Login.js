import React, {Component} from 'react'
import '../Forms/Signup.css'
import axios from 'axios'


class Login extends Component{ 
    state = {   
        email: '',
        password: '',
        authenticated: false
    }

    onChange= (event) =>{    
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    async authentication(data){  
        let admin;
        try { 
           admin = await axios.get('/api/admin')
           
          }catch (err) {
            console.log('something went wrong', err)
        }
        admin = admin.data
        admin = admin[0]
        console.log(admin)
        if(admin.email===data.email&&admin.password===data.password){   
                this.setState({  
                email: '',
                password: '',
                authenticated:true   
            })
        }else{  
            this.setState({  
                email: '',
                password: '' 
            })
            alert('wrong email/password')
        }
    }

    onSubmit= (event) =>{    
        event.preventDefault()
        let email = this.state.email
        let password = this.state.password
        let data = {    
            "email": email,
            "password": password
        }
        console.log(this.state)
        this.authentication(data)
        console.log(this.state)
    }    


    render(){   
        console.log(this.state)
        if(this.state.authenticated){   
            this.props.displayLogin(this.state.authenticated)
        }
        return( 
            <div className='SignupContainer'>    
                <div className='Signup'>
                <h3>Flower TV</h3>
                <h1>Admin Login</h1> 
                <div className='SignupBreak'></div>
                <div className='SignupFormContainer'>   
                <div className='SignupForm'>   
                    <form onSubmit={this.onSubmit}>  
                            <div className='SignupInput'>   
                                <input type='text' id='email' placeholder='Email' onChange={this.onChange} value={this.state.email} required/>
                            </div>
                            <div className='SignupInput'>   
                                <input type='password' id='password' placeholder='Password' onChange={this.onChange} value={this.state.password} required/>
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
            </div>
            
        )
    }
}

export default Login