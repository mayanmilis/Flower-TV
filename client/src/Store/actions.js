import axios from 'axios'

export const mountShows = (list) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'MOUNT_SHOWS', list: list})
        // .catch((err) =>{
        //     dispatch({ type: 'MOUNT_SHOWS_ERROR', err})
        // })
    }
};
export const mountMovies = () =>{ 
    return(dispatch, gesState) =>{  
        let moviesList=[{title:"yona"}]
        async function fetchAllMoviesData (){
            let movies
            try { 
            movies = await axios.get('/api/movies');
            }catch (err) {
              console.log('Something went wrong', err);
          }
          console.log(movies.data) 
          moviesList = movies.data
          }
          fetchAllMoviesData()
          console.log(moviesList)
        console.log(moviesList)
        dispatch({ type: 'MOUNT_MOVIES', list: moviesList})
        // .catch((err) =>{
        //     dispatch({ type: 'MOUNT_MOVIES_ERROR', err});
        // })
    }
};
// export const dada = async function fetchAllMoviesData(){
//     let moviesList = []; 
//     try { 
//       moviesList = await axios.get('/api/movies');
//     }catch (err) {
//       console.log('Something went wrong', err);
//   }
//   return moviesList = moviesList.data
//   }

// export const mountMovies = (list) =>{ 
//     return(dispatch, gesState) =>{  
//         console.log('yonaaaaaaaaaa').then(()=> {  
//             dispatch({ type: 'MOUNT_MOVIES', list: list})
//             .catch((err) =>{
//                 dispatch({ type: 'MOUNT_MOVIES_ERROR', err})
//             })
//         })

//     }
// };
export const newUser = (user) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'NEW_USER', user: user})
        .catch((err) =>{
            dispatch({ type: 'NEW_USER_ERROR', err})
        })
    }
};
export const mountUsers = (list) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'MOUNT_USERS', list: list})
        .catch((err) =>{
            dispatch({ type: 'MOUNT_USERS_ERROR', err})
        })
    }
};