import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {ActionType, PostDataType, StoreType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type MyPostsPropsType = {
    newPostText:string
    store: StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.newPostText))
    }
    const onPostChanger = (text:string) => {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action) /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value})*/
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost}
                 updateNewPostText={onPostChanger}/>
    )
}



export default MyPostsContainer;