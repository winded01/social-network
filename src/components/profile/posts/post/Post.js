import React from 'react';
import '../../profile.css';
import avatar_mini from '../../../../img/Elon_Mask_small.jpg';
function Post() {
  return (
    <div className='post'>
     <img src={avatar_mini} />
     <span>Илон Маск</span>
     <p>Hello, world</p>
    </div>
  );
}

export default Post;
