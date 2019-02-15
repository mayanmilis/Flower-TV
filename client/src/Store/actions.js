export const mountShows = (list) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'MOUNT_SHOWS', list: list})
        .catch((err) =>{
            dispatch({ type: 'MOUNT_SHOWS_ERROR', err})
        })
    }
};
export const mountMovies = (list) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'MOUNT_MOVIES', list: list})
        .catch((err) =>{
            dispatch({ type: 'MOUNT_MOVIES_ERROR', err})
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
export const mountUsers = (list) =>{ 
    return(dispatch, gesState) =>{  
        dispatch({ type: 'MOUNT_USERS', list: list})
        .catch((err) =>{
            dispatch({ type: 'MOUNT_USERS_ERROR', err})
        })
    }
};