import React,{Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

class UsersList extends Component{  

    render(){   
        let {users} = this.props
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
                        <tr>
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

const mapStateToProps = (state) =>{ 
    return{ 
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersList)