import React from 'react';
import s from './Friends.module.css'
import {FriendsDataType, SidebarType} from '../../../redux/store';
import OneFriend from '../OneFriend';
import Post from '../../Profile/MyPosts/Posts/Post';

type FriendsType = {
    friendsType: Array<FriendsDataType>
}



 function Friends(props: SidebarType) {

     let friends = props.friends.map( (p) => <OneFriend key={p.id} id={p.id} name={p.name} /> )
    return (
        <div>
            {friends}
        </div>
    )
}

export default Friends