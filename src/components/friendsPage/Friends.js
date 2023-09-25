import React from 'react';
import '../friendsPage/friends.css'
import Friend from './friend/Friend';

function Friends(props) {
  return (
    <div className='friends'>
       {props.friendsPage.friendsData.map((element)=><Friend name={element.name} id={element.id} avatar={element.avatar}/>)}
    </div>
  );
}

export default Friends;
