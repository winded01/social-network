import React from 'react';

function Friend(props) {
  return (
    <div className='friend'>
        <img src={props.avatar}/>
        <p>{props.name}</p>
    </div>
  );
}

export default Friend;
