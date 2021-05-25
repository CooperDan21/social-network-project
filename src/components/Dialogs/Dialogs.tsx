import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    ActionType,
    DialogsType,
    MessageType,
} from '../../redux/store';
import {addMessageCreator, updateDialogMessagesCreator} from '../../redux/dialog-reducer';


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionType) => void
}


function Dialogs(props: DialogsPropsType) {

    let dialogElements = props.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.messages.map((m) => <Message message={m.messages}/>)

    /*    let newMessageElem = React.createRef<HTMLTextAreaElement>();*/

    const addMessage = () => {
        /*props.addMessage(props.newMessageText)*/
        /*props.dispatch({type: 'ADD-MESSAGE', newMessageText: props.newMessageText})*/
        props.dispatch(addMessageCreator(props.newMessageText))
    }

    const onMessageChanger = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        /*props.updateDialogMessage(e.currentTarget.value)*/
        /*props.dispatch({type: 'UPDATE-DIALOG-MESSAGE', newMessage: e.currentTarget.value})*/
        props.dispatch(updateDialogMessagesCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChanger} className={s.message} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;