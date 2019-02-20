import axios from 'axios'

export const mountShows = () =>{ 
        return(dispatch, gesState) =>{  
            let showsList
            async function fetchAllMoviesData (){
                let shows
                try { 
                shows = await axios.get('/api/shows');
                shows = shows.data
                }catch (err) {
                  console.log('Something went wrong', err);
              }
              showsList = shows
              }
              fetchAllMoviesData().then(() =>{  
                dispatch({ type: 'MOUNT_SHOWS', list: showsList})
              }).catch((err) =>{
                dispatch({ type: 'MOUNT_SHOWS_ERROR', err})
            })
    }
};

export const mountMovies = () =>{ 
    return(dispatch, gesState) =>{  
        let moviesList
        async function fetchAllMoviesData (){
            let movies
            try { 
            movies = await axios.get('/api/movies');
            movies = movies.data
            }catch (err) {
              console.log('Something went wrong', err);
          }
          moviesList = movies
          }
          fetchAllMoviesData().then(() =>{  
            dispatch({ type: 'MOUNT_MOVIES', list: moviesList})
          }).catch((err) =>{
            dispatch({ type: 'MOUNT_MOVIES_ERROR', err});
        })
    }
};

export const newUser = (user) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'NEW_USER', user: user})
        .catch((err) =>{
            dispatch({ type: 'NEW_USER_ERROR', err})
        })
    }
};

export const mountUsers = () =>{ 
    return(dispatch, gesState) =>{  
        let usersList;
        async function mountUsers (){
            let users;
            try { 
              users = await axios.get('/api/users');
              users = users.data
            }catch (err) {
                console.log('Something went wrong', err);
            }
            usersList = users
            }
            mountUsers().then(() =>{    
                dispatch({ type: 'MOUNT_USERS', list: usersList})
            }).catch((err) =>{
                dispatch({ type: 'MOUNT_USERS_ERROR', err})
            })
    }
};