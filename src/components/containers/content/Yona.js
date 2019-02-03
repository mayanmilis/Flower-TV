// import React, {Component} from 'react'
// import '../dashboard/dashboard.css'

// class Yona extends Component{   

//     render(){   
//         let {item} = this.props
//         console.log(item)
//         return( 
//             <div className='DashboardContainer'>    
//             <h1>Hello</h1>
//             </div> 
//         )
//     }
// }

// const mapStateToProps = (state, ownProps)=>{  
//     console.log(state)
//     const id = ownProps.match.params.id
//     const movies = state.movies
//     const shows = state.shows
//     let item
//     for(let i =0; i<movies.length; i++){    
//         if (movies[i].id===Number(id)){   
//              item=movies[i]
//              break
//         }
//     }
//     for(let i =0; i<shows.length; i++){    
//         if (shows[i].id===Number(id)){   
//              item=shows[i]
//              break
//         }
//     }

    
// // console.log(id, movies[0].id, item.id)
//     return{ 
//         item: item
//     }
// }

// export default connect(mapStateToProps)(Yona)
