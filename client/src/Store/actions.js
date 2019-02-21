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

export const createNewUser = (newUser) =>{ 
    let user = newUser
    return(dispatch, gesState) =>{  

        async function newUser(){  
            let newUser = user
            let usersList;
            try { 
                let list = await axios.get('/api/users')
                usersList = list
                usersList = usersList.data
               }catch (err) {
                 console.log('something went wrong', err)
             }
             console.log(usersList)
             if(usersList.length === 0){    
                try { 
                    await axios.post('/api/users', newUser)
                   }catch (err) {
                     console.log('something went wrong', err)
                 }
                 try { 
                    await axios.post('/api/mail', newUser)
                   }catch (err) {
                     console.log('something went wrong', err)
                 }
             }else{  
                 for(let i=0; i<usersList.length; i++){ 
                    if(newUser.email===usersList[i].email||newUser.phoneNumber===usersList[i].phoneNumber){  
                       return alert('Your Details Are Alreay In Our System')
                    }else{ 
                       try { 
                           await axios.post('/api/users', newUser)
                          }catch (err) {
                            console.log('something went wrong', err)
                        }
                        try { 
                            await axios.post('/api/mail', newUser)
                           }catch (err) {
                             console.log('something went wrong', err)
                         }
                    }
                }
             }
        }
        newUser().then(() =>{   
            dispatch({ type: 'NEW_USER', user: newUser})
        }).catch((err) =>{
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