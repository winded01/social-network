import React from 'react';
import '../profile.css';
import Post from './post/Post.js';
import { onPostChange } from '../../../data/state';
let postText=React.createRef();
function Posts(props) {
  let onPostChange=()=>{
    props.onPostChange(postText.current.value);
    console.log(postText)
  };
  let addPost=()=>{
    props.addPost(postText.current.value);
    postText.current.value="";
    console.log(postText)
  };
  return (
  <div className='posts'>
    <h2>Мои посты</h2>
     <input  onChange={onPostChange} value={props.newPostText} ref={postText} placeholder='введите текст' />
     <button onClick={addPost}>добавить пост</button>
     {props.postsData.map((element)=><Post message={element.text} id={element.id} likes={element.likes}/>) }
  </div>
  );
}

export default Posts;

