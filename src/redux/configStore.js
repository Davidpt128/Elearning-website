import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {isLoggedInReducer} from './reducers/isLoggedInReducer';
import {infoUserReducer} from './reducers/infoUserReducer';
import {catalogReducer} from './reducers/catalogReducer';
import {listCourseReducer} from './reducers/listCourseReducer';


const rootReducers = combineReducers({
    //Các state sự án sẽ được khai báo tại đây
    isLoggedInReducer,
    infoUserReducer,
    catalogReducer,
    listCourseReducer,
});

let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducers, composeCustom);