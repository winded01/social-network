import React from 'react';
import '../../profile.css';
import avatar_mini from '../../../../img/Elon_Mask_small.jpg';
function Post(props) {
  return (
    <div className='post'>
     <img src={avatar_mini} />
     <span>Илон Маск</span>
     <p>{props.message}</p>
     <p><span>{props.likes}</span> Like</p>
    </div>
  );
}

export default Post;
