const stateDefault = []


export const listOfCoursesReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'GET_DANH_MUC_KHOA_HOC': {
            state = action.data;
            return [...state];
        }
        default: return state;
    }
}