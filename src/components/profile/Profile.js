import React from 'react';
import './profile.css';
import avatar from '../../img/Elon_mask.jpg';
import avatar_mini from '../../img/Elon_Mask_small.jpg';
function Profile() {
  return (
 <div className='profile'>
  <div className='user'>
    <img src={avatar_mini} />
    <p>Илон Маск</p>
  </div>
  <div className='posts'>
   <input placeholder='введите текст' />
   <button>добавить пост</button>
   <div className='post'>
     <img src={avatar_mini} />
     <span>Илон Маск</span>
     <p>Hello, world</p>
     
   </div>
  </div>
 </div>
  );
}

export default Profile;
