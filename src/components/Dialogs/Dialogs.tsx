import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


function Dialogs(props: DialogsPropsType) {


    let dialogElements = props.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messageElements = props.messages.map((m) => <Message key={m.id} message={m.messages}/>)

    /*    let newMessageElem = React.createRef<HTMLTextAreaElement>();*/

    const onAddMessage = () => {

        /*props.addMessage(props.newMessageText)*/
        /*props.dispatch({type: 'ADD-MESSAGE', newMessageText: props.newMessageText})*/
        //props.dispatch(addMessageCreator(props.newMessageText))
        props.sendMessage()
    }

    const onMessageChanger = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        /*props.updateDialogMessage(e.currentTarget.value)*/
        /*props.dispatch({type: 'UPDATE-DIALOG-MESSAGE', newMessage: e.currentTarget.value})*/
        //props.dispatch(updateDialogMessagesCreator(text))
        props.updateNewMessageBody(body)
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
                    <button onClick={onAddMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;