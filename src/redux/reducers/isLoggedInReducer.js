const stateDefault = {
    isLoggedIn : false,
}

export const isLoggedInReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'LOGIN': {
            state.isLoggedIn = true;
            return {...state};
        }
        case 'LOGOUT': {
            state.isLoggedIn = false;
            return {...state};
        }
        default: return state;
    }
}