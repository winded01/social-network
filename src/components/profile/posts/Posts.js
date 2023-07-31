import React from 'react';
import '../profile.css';
import avatar from '../../../img/Elon_mask.jpg';
import avatar_mini from '../../../img/Elon_Mask_small.jpg';
import Post from './post/Post.js'
function Posts() {
  return (
  <div className='posts'>
    <h2>Мои посты</h2>
    <input placeholder='введите текст' />
     <button>добавить пост</button>
     <Post />
     <Post />
     <Post />
     <Post />
  </div>
  );
}

export default Posts;
