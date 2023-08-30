import React from 'react';
import '../profile.css';
import avatar from '../../../img/Elon_mask.jpg';
import avatar_mini from '../../../img/Elon_Mask_small.jpg';
import Post from './post/Post.js';
let postsData =[{text:'hello world', id:'1', likes:8},{text:'hello', id:'2', likes:3},{text:'im Elon', id:'3', likes:5}];
function Posts() {
  return (
  <div className='posts'>
    <h2>Мои посты</h2>
    <input placeholder='введите текст' />
     <button>добавить пост</button>
     {postsData.map((element)=><Post message={element.text} id={element.id} likes={element.likes}/>) }
     


  </div>
  );
}

export default Posts;
