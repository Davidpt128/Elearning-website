const stateDefault = {

}

export const infoUserReducer = (state = stateDefault,action) => {
    
    switch(action.type) {
        
        case 'CAP_NHAT_THONG_TIN': {
            console.log('action',action.data)
            let {hoTen,soDt} = action.data
            let newState = {...state};
            newState.hoTen = hoTen
            newState.soDT = soDt
            return {...newState};
        }
        case 'GET_INFO_USER': {
            console.log('action before', action.data)
            state = {...action.data};
            
            return {...state};
        }
        default:{
            return state;
        } 
    }
}