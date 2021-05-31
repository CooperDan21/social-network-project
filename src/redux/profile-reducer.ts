import {
    ActionType,
    PostDataType,
    ProfilePageType,
    AddPostActionType,
    ChangeNewTextActionType
} from './store';

const initialState: ProfilePageType = {
    posts: [
    {id: 1, messages: 'Hi', likes: 10},
    {id: 2, messages: 'Ho', likes: 20},
    {id: 3, messages: 'Bo', likes: 30}
],
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
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType =>
    ({type: ADD_POST})

export const updateNewPostTextCreator = (newPostText: string): ChangeNewTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText})

export default profileReducer
