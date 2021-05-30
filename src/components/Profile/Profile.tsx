import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ActionType, PostDataType, StoreType} from '../../redux/store';

type MyPostsPropsType = {

    store: StoreType

}



function Profile (props: MyPostsPropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} newPostText={props.store._state.profilePage.newPostText} />
        </div>
    )
}

export default Profile;