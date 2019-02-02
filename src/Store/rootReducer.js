const initialState = {  
    movies:[],
    shows:[]
} 

const rootReducer = (state = initialState, action) =>{    
    switch(action.type){   
        case 'MOUNT_SHOWS':
        return{ 
            ...state,
            shows: action.list
        }
        case 'MOUNT_SHOWS_ERROR':
        console.log('mount_shows_error', action.err)
        return state; 
        case 'MOUNT_MOVIES':
        return{ 
            ...state,
            movies: action.list
        }
        case 'MOUNT_MOVIES_ERROR':
        console.log('mount_movies_error', action.err)
        return state; 
        default:
        return state;
    }
}

export default rootReducer