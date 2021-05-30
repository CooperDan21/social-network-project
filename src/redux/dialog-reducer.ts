import  {
    ActionType,
    MessageType,
    RootStateType,
    DialogDataType,
    AddMessageActionType,
    UpdateDialogMessageActionType
} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'
const initialState = {
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
    }

const dialogReducer = (state: DialogDataType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                messages: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_DIALOG_MESSAGE:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageCreator = (newMessageText:string): AddMessageActionType =>
    ({type: ADD_MESSAGE, newMessageText: newMessageText})

export const updateDialogMessagesCreator = (newMessage: string): UpdateDialogMessageActionType =>
    ({type: UPDATE_DIALOG_MESSAGE, newMessage: newMessage})

export default dialogReducer