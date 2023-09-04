import React from 'react';
import './profile.css';
import avatar from '../../img/Elon_mask.jpg';
import avatar_mini from '../../img/Elon_Mask_small.jpg';
import Posts from './posts/Posts.js';
import ProfileInfo from './profileInfo/ProfileInfo';
function Profile(props) {
  return (
 <div className='profile'>
   <ProfileInfo/>
   <Posts postsData={props.postsData} />
 </div>
  );
}

export default Profile;
