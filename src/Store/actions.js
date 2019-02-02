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