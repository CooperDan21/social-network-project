import  {ActionType,  SidebarType} from './store';

const initialState = {
    friends: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'NeOleg'},
    ]
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionType) => {
    return state
}

export default sidebarReducer