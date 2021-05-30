import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likes: number
    id: number
}

function Post(props : PostType) {
    return (
        <div>
            <div className={s.item}>
                <img src='https://sun9-66.userapi.com/s/v1/if2/av-ngChxNiJJMMEn2G81pjlKqB9D7IS83nmgEFBRMgfiU4ySnMJsZDUIGiitm9WCO-QboH3uay39ApWqmHnyQT4P.jpg?size=200x0&quality=96&crop=0,0,400,400&ava=1'/>
                {props.message}
            </div>
            <div>
                <span>Like = {props.likes}</span>
            </div>
        </div>

    )
}

export default Post;