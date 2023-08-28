import React from 'react';
import './profile.css';
import avatar from '../../img/Elon_mask.jpg';
import avatar_mini from '../../img/Elon_Mask_small.jpg';
import Posts from './posts/Posts.js';
import ProfileInfo from './profileInfo/ProfileInfo';
function Profile() {
  return (
 <div className='profile'>
   <ProfileInfo/>
  <Posts />
 </div>
  );
}

export default Profile;
