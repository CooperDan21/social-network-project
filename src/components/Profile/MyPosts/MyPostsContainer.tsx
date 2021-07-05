import {
    addPostActionCreator, PostDataType,
    updateNewPostTextCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ReduxStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux'
import {Dispatch} from 'redux';



type MapStateToProps = {
    posts: Array<PostDataType>
    newPostText: string
}
type MapDispatchToProps = {
    updateNewPostText: (text:string) => void
    addPost: () => void
}

export type PostsPropsType = MapStateToProps & MapDispatchToProps



/*function MyPostsContainer(props: MyPostsPropsType) {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChanger = (text:string) => {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action) /!*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value})*!/
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost}
                 updateNewPostText={onPostChanger}/>
    )
}*/

let mapStateToProps = (state:ReduxStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        },
        addPost: () => {
           dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;