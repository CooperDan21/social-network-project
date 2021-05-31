import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ActionType, PostDataType, StoreType} from '../../redux/store';
import {ReduxStoreType} from '../../redux/redux-store';

type MyPostsPropsType = {
    store: ReduxStoreType
}



function Profile (props: MyPostsPropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;