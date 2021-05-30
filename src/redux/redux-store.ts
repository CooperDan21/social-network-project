import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogReducer from './dialog-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer
})


let store = createStore(reducers);

export default store
