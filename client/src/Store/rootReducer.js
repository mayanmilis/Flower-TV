const initialState = {  
    movies:[],
    shows:[],
    users: []
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
        case 'NEW_USER':
        let users = state.users
        users.push(action.user)
        return{ 
            ...state,
            users: users
        }
        case 'NEW_USER_ERROR':
        console.log('new_user_error', action.err)
        return state; 
        case 'MOUNT_USERS':
        return{ 
            ...state,
            users: action.list
        }
        case 'MOUNT_USERS_ERROR':
        console.log('mount_users_error', action.err)
        return state; 
        default:
        return state;
    }
}

export default rootReducer