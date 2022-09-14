const stateDefault = []


export const listCourseReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'GET_KHOA_HOC': {
            state = action.data;
            return [...state];
        }
        default: return state;
    }
}