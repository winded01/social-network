import React from 'react';
import './profile.css';
import avatar from '../../img/Elon_mask.jpg';
import avatar_mini from '../../img/Elon_Mask_small.jpg';
import Posts from './posts/Posts.js';
function Profile() {
  return (
 <div className='profile'>
  <div className='user'>
    <img src={avatar_mini} />
    <p>Илон Маск</p>
  </div>
  <Posts />
 </div>
  );
}

export default Profile;
