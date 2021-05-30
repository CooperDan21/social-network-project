import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post';
import {PostDataType} from '../../../redux/store';


 type MyPostsPropsType = {
    posts: Array<PostDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText:(text: string) => void
}

function MyPosts(props: MyPostsPropsType) {


    let posts = props.posts.map( (p) => <Post key={p.id} id={p.id} message={p.messages} likes={p.likes} /> )
    /*let newPostElement = React.createRef<HTMLTextAreaElement>()*/ // ур31:ПС. Рефы(). принимает значения по аналогии с useState

     const onAddPost = () => {
         props.addPost()
        /*if(newPostElement.current){  // если есть текущение значение, то идем дальше и берем его value
            alert(newPostElement.current.value)
        }*/
        /*alert(newPostElement.current && newPostElement.current.value)*/ // алогичная запись, короче
       //alert(newPostElement.current?.value)// анологичная запись, короче и ПРЕДПОЧТИТЕЛЬНЕЙ, синтаксис TypeScrips
         /*props.addPost(props.newPostText);*/
          /*if (newPostElement){  // не работает
             props.addPost(newPostElement.current.value)
         }*/
    }

const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value
         props.updateNewPostText(text)
    /*let action = updateNewPostTextCreator(text)*/
   /* props.dispatch(action)*/
    /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value})*/
}

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={(e) => onPostChange(e)}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </div>

    )
}

export default MyPosts;