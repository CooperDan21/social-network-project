import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {addMessageCreator, DialogsType, MessageType, updateDialogMessagesCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


/*function DialogsContainer(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage


    const addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    const onMessageChanger = (body:string) => {
        props.store.dispatch(updateDialogMessagesCreator(body))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            updateNewMessageBody={onMessageChanger}
            sendMessage={addMessage}
            dialogsPage={state}/>
    )
}*/


export type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType



let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    debugger
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateDialogMessagesCreator(body))
        },
        sendMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;