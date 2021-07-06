import {
    ActionType,
    AddPostActionType,
    ChangeNewTextActionType
} from './store';
import {MessageType} from './dialog-reducer';

export type PostDataType = {
    id: number
    messages: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
    {id: 1, messages: 'Hi', likes: 10},
    {id: 2, messages: 'Ho', likes: 20},
    {id: 3, messages: 'Bo', likes: 30}
] as Array<PostDataType>,
    newPostText: ''
}
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

 const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataType = {
                id: 7,
                messages: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            let copyState = {...state};
            copyState.newPostText = action.newPostText
            return copyState
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType =>
    ({type: ADD_POST})

export const updateNewPostTextCreator = (newPostText: string): ChangeNewTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText})

export default profileReducer
