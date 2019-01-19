import React, { Component} from 'react'
import  './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component{ 
    state = {   
        sidebarDisplay: false
    }

    handleSidebar= () =>{
        let sidebarDisplay= this.state.sidebarDisplay;   
        this.setState({ 
            sidebarDisplay: !sidebarDisplay
        })
    }

    render(){
        let sidebarPosition;
        if(this.state.sidebarDisplay === false){    
            sidebarPosition = -300
        }else{  
            sidebarPosition = 0
        }   
        return( 
            <div>   
                    <div className='Navbar'>   
                        <nav>   
                            <ul>   
                            <li><NavLink to='/'>Flower TV</NavLink></li>
                            <li><NavLink to='/signup'>Sign-Up</NavLink></li>
                                <div className='Burger' onClick={this.handleSidebar}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>  
                            </ul>
                        </nav>
                        </div>
                    <div className='SideBar' style={{right: sidebarPosition}}>  
                        <ul>    
                            <li><NavLink to='/'><i class="fas fa-home"></i> Home</NavLink></li>
                            <li><NavLink to='/'><i class="fas fa-th-large"></i> Library</NavLink></li>
                            <li><NavLink to='/'><i class="fas fa-tv"></i> Watch Anywhere</NavLink></li>
                            <li><NavLink to='/'><i class="fas fa-chess-queen"></i> Choose Your Plan</NavLink></li>
                        </ul>
                        <div className='SideBarBtn'>
                            <ul>    
                                <button>Join</button>
                                <button>Free Month Trial</button>
                            </ul>   
                        </div>
                     </div>
            </div>
    
    
        )
    }
}  
    

export default Navbar