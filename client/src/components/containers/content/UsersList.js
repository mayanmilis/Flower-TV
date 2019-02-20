import React,{Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import axios from 'axios'
import Login from './Login'
import {mountUsers} from '../../../Store/actions'

class UsersList extends Component{  
    state = {   
        displayLogin: true
    }
    componentDidMount(){ 
        this.props.mountUsers()
        this.setState({ 
            isLoaded: true
          })
    }
      


    displayLoginHandler = (display) =>{ 
        if(display){   
            this.setState({ 
                displayLogin: false
            })
        }else{  
            return null
        }
    }

    render(){   
        console.log(this.state.displayLogin)
        let {users} = this.props
        if(this.state.displayLogin){    
            return( 
                <div>   
                    <Login
                    displayLogin={this.displayLoginHandler}
                    test = {this.state.displayLogin}
                    />
                </div>
            )
        }else{  
            return( 
                <div className='DashboardContainer'>
                <div className='Dashboard'> 
                 <h3>Flower TV</h3>
                 <h1>Users List</h1> 
                 </div>
                 <div className='MostPopular'>
                    </div> 
                    <div className='ChoosePlan'>   
                        <table> 
                            <thead>
                                    <tr>    
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {users&&users.map(user => { 
                            return( 
                                <tr key= {user._id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{moment(user.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                </tr>
                                )
                               })}
                            </tbody>
                        </table>
                    </div>
                    </div>
                )
        }
    }
}
const mapDispatchToProps = (dispatch)=>{    
    return{ 
        mountUsers: () => dispatch(mountUsers())
    }
  }

const mapStateToProps = (state) =>{ 
    return{ 
        users: state.users
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersList)