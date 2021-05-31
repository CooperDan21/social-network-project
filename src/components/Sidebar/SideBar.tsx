import React from 'react';
import Friends from '../Friends/RecommendedFriends/Friends';
import {FriendsDataType, SidebarType} from '../../redux/store';
import {ReduxStoreType} from '../../redux/redux-store';

type SideBarTypeComponent = {
    store: ReduxStoreType
}

function SideBar(props: SideBarTypeComponent) {

    return (
        <div>
            <Friends store={props.store}/>
        </div>


    )
}

export default SideBar