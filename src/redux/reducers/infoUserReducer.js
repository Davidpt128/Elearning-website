const stateDefault = {

}

export const infoUserReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'GET_INFO_USER': {
            state = {...action.data};
            return {...state};
        }
        case 'CAP_NHAT_THONG_TIN': {
            let {hoTen,soDt} = action.data
            // state = {...state};
            state.hoTen = hoTen
            state.soDT = soDt
            return {...state};
        }
        default: return state;
    }
}