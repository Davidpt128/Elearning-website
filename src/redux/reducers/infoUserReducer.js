const stateDefault = {

}

export const infoUserReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'GET_INFO_USER': {
            state = {...action.data};
            return {...state};
        }
        case 'CAP_NHAT_THONG_TIN': {
            console.log('action',action)
            let {hoTen,soDt} = action.data
            let newState = {...state};
            newState.hoTen = hoTen
            newState.soDT = soDt
            return {...newState};
        }
        default: return state;
    }
}