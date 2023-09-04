import React from 'react';
import '../profile.css';
import avatar from '../../../img/Elon_mask.jpg';
import avatar_mini from '../../../img/Elon_Mask_small.jpg';
import Post from './post/Post.js';
function Posts(props) {
  return (
  <div className='posts'>
    <h2>Мои посты</h2>
    <input placeholder='введите текст' />
     <button>добавить пост</button>
     {props.postsData.map((element)=><Post message={element.text} id={element.id} likes={element.likes}/>) }
     


  </div>
  );
}

export default Posts;
