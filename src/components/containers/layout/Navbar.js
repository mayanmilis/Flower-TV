import React, { Component} from 'react'
import  './Navbar.css'

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
            sidebarPosition = -400
        }else{  
            sidebarPosition = 0
        }   
        return( 
            <div className='NavbarContainer'>   
                    <div className='Navbar'>   
                        <nav>   
                            <ul>   
                            <li><a href='http://localhost:3000/'>Flower TV</a></li>
                            <li><a>Sign-Up</a></li>
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
                            <li><a>Home</a></li>
                            <li><a>Library</a></li>
                            <li><a>Watch Anywhere</a></li>
                            <li><a>Choose Your Plan</a></li>
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