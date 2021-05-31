import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogReducer from './dialog-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer
})

export type ReduxStateType = ReturnType<typeof reducers>
let store = createStore(reducers);

export type ReduxStoreType = typeof store

export default store
