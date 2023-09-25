import React from 'react';
import './profile.css';

import Posts from './posts/Posts.js';
import ProfileInfo from './profileInfo/ProfileInfo';
function Profile(props) {
  return (
 <div className='profile'>
   <ProfileInfo/>
   <Posts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange}/>
 </div>
  );
}

export default Profile;
