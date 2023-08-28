import React from 'react';
import avatar from '../../../img/Elon_mask.jpg';
import avatar_mini from '../../../img/Elon_Mask_small.jpg';
function ProfileInfo() {
  return (
  <div className='user'>
    <img src={avatar_mini} />
    <p>Илон Маск</p>
  </div>
  );
}

export default ProfileInfo;
