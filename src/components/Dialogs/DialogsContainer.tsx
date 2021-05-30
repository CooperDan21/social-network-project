import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    ActionType,
    DialogsType,
    MessageType, StoreType,
} from '../../redux/store';
import {addMessageCreator, updateDialogMessagesCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';


type DialogsPropsType = {

    newMessageText: string
    store : StoreType
}


function DialogsContainer(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage


    const addMessage = () => {
        props.store.dispatch(addMessageCreator(props.newMessageText))
    }

    const onMessageChanger = (body:string) => {
        props.store.dispatch(updateDialogMessagesCreator(body))
    }

    return (
        <Dialogs
            dialogs={props.store._state.dialogsPage.dialogs}
            messages={props.store._state.dialogsPage.messages}
            newMessageText={props.store._state.dialogsPage.newMessageText}
            updateNewMessageBody={onMessageChanger}
            sendMessage={addMessage}
            dialogsPage={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer;