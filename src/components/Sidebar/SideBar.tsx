import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from 'react-router-dom';
import OneFriend from '../Friends/OneFriend';
import Friends from '../Friends/RecommendedFriends/Friends';
import {FriendsDataType, SidebarType} from '../../redux/store';

function SideBar(props: SidebarType) {
    debugger
    return (
        <div>
            <Friends  friends={props.friends} />
        </div>


    )
}

export default SideBar