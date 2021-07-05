import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogReducer from './dialog-reducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

export type ReduxStoreType = typeof store


