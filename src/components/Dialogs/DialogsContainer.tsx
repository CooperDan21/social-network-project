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
import {ReduxStoreType} from '../../redux/redux-store';


type DialogsPropsType = {
    store : ReduxStoreType
}


function DialogsContainer(props: DialogsPropsType) {
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
}

export default DialogsContainer;