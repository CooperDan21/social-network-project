import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';

export type MessageType = {
    id: number
    messages: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostDataType = {
    id: number
    messages: string
    likes: number
}
export type FriendsDataType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}
export type DialogDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendsDataType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogDataType
    sideBar: SidebarType

}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'

}
export type UpdateDialogMessageActionType = {
    type: 'UPDATE-DIALOG-MESSAGE'
    newMessage: string
}

export type ActionType = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | UpdateDialogMessageActionType

export type StoreType = {
    _state: RootStateType
    /*addPost: () => void
    updateNewPostText: (newPostText: string) => void
    addMessage: () => void
    updateDialogMessage: (newPostText: string) => void*/
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observe: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'Hi', likes: 10},
                {id: 2, messages: 'Ho', likes: 20},
                {id: 3, messages: 'Bo', likes: 30}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, messages: 'Hi'},
                {id: 2, messages: 'I am here'},
                {id: 3, messages: 'Right here'},
                {id: 4, messages: 'Yohoo'},
                {id: 5, messages: 'Lets dance'},
            ],
            newMessageText: ''
            ,
            dialogs: [
                {id: 1, name: 'Denis'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Nikita'},
                {id: 4, name: 'Artem'},
                {id: 5, name: 'Veron'},
            ]
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Oleg'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'NeOleg'},
            ]
        }
    },
    getState() {
        return this._state
    },
    /*addPost() {
        const newPost: PostDataType = {
            id: 7,
            messages: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 6,
            messages: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateDialogMessage(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },*/
    _callSubscriber() {
    },
    subscribe(observe: (state: RootStateType) => void) {  // наблюдатель. паттерны, observer; похож на publisher-subscriber; addEventListener; onClick
        this._callSubscriber = observe
    },
    dispatch(action) { // обязательное свойство тип {type: 'НАЗВАНИЕ ДЕЙСТВИЯ'(с БОЛЬШОЙ)}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
        /*if (action.type === ADD_POST) {
            const newPost: PostDataType = {
                id: 7,
                messages: action.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage: MessageType = {
                id: 6,
                messages: action.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_DIALOG_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }*/
    }
}


