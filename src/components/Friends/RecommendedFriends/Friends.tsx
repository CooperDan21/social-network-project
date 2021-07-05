import React from 'react';

import OneFriend from '../OneFriend';
import Post from '../../Profile/MyPosts/Posts/Post';
import {ReduxStoreType} from '../../../redux/redux-store';

type FriendsType = {
    store: ReduxStoreType
}

 function Friends(props: FriendsType) {
    let state = props.store.getState().sideBar
     let friends = state.friends.map( (p) => <OneFriend key={p.id} id={p.id} name={p.name} /> )
    return (
        <div>
            {friends}
        </div>
    )
}

export default Friends