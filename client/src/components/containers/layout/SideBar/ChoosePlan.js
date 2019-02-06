import React from 'react'
import {NavLink} from 'react-router-dom'

const choosePlan = () =>{   
    return( 
    <div className='DashboardContainer'>
        <div className='Dashboard'> 
         <h3>Flower TV</h3>
         <h1>Choose Your Plan</h1> 
         </div>
         <div className='MostPopular'>
            </div> 
            <div className='ChoosePlan'>   
                <table> 
                    <thead>
                            <tr>    
                                <th id='left'></th>
                                <th>BASIC</th>
                                <th>STANDART</th>
                                <th>PREMIUM</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>    
                                <td id='left'>Monthly price after free month ends</td>
                                <td>₪29.90</td>
                                <td>₪39.90</td>
                                <td>₪49.90</td>
                            </tr>
                            <tr>    
                                <td id='left'>HD available	</td>
                                <td><i className="fas fa-times"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>    
                                <td id='left'>Ultra HD available	</td>
                                <td><i className="fas fa-times"></i></td>
                                <td><i className="fas fa-times"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>    
                                <td id='left'>Screens you can watch on at the same time	</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>    
                                <td id='left'>Watch on your laptop, TV, phone and tablet	</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>    
                                <td id='left'>Unlimited movies and TV shows	</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>    
                                <td id='left'>Cancel anytime	</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            <tr>    
                                <td id='left'>First month free			</td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                                <td><i className="fas fa-check"></i></td>
                            </tr>
                            </tbody>
                </table>
                <div className='ChoosePlanBtn'>   
                      <NavLink to='/signup'><button>Join</button></NavLink>
                </div>
               
            </div>
    </div>
    )
} 


export default choosePlan