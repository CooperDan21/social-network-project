import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import p from '../../Profile/MyPosts/Posts/Post.module.css'


type PropsType = {
    id: number
    name: string
}

function DialogItem(props: PropsType) {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink className={p.item} to={path}>
                <img  src='https://sun9-66.userapi.com/s/v1/if2/av-ngChxNiJJMMEn2G81pjlKqB9D7IS83nmgEFBRMgfiU4ySnMJsZDUIGiitm9WCO-QboH3uay39ApWqmHnyQT4P.jpg?size=200x0&quality=96&crop=0,0,400,400&ava=1'/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;