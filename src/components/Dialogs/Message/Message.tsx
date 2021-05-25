import React from 'react';
import s from '../Dialogs.module.css';

function Message(props: any) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;