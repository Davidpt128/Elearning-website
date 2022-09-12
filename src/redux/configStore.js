import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {isLoggedInReducer} from './reducers/isLoggedInReducer';
import {infoUserReducer} from './reducers/infoUserReducer';


const rootReducers = combineReducers({
    //Các state sự án sẽ được khai báo tại đây
    isLoggedInReducer,
    infoUserReducer,

});

let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducers, composeCustom);