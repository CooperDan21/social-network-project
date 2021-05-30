import React from 'react';
import s from './Friends.module.css'
import {FriendsDataType} from '../../redux/store';

type FriendType = {
    id: number
    name: string
}
type FriendsType = {
    friendsType: Array<FriendsDataType>
}




 function OneFriend(props: FriendType) {

    return (
        <div className={s.item}>
            <img  src='https://sun9-66.userapi.com/s/v1/if2/av-ngChxNiJJMMEn2G81pjlKqB9D7IS83nmgEFBRMgfiU4ySnMJsZDUIGiitm9WCO-QboH3uay39ApWqmHnyQT4P.jpg?size=200x0&quality=96&crop=0,0,400,400&ava=1'/>
            {props.name}
        </div>
    )
}

export default OneFriend