import React from 'react';
import './profile.css';

import Posts from './posts/Posts.js';
import ProfileInfo from './profileInfo/ProfileInfo';
function Profile(props) {
  return (
 <div className='profile'>
   <ProfileInfo/>
   <Posts postsData={props.profilePage.postsData} newPostText={props.newPostText} dispatch={props.dispatch}/>
 </div>
  );
}

export default Profile;
