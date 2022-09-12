const stateDefault = {

}

export const infoUserReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'GET_INFO_USER': {
            state = {...action};
            return {...state};
        }
        default: return state;
    }
}