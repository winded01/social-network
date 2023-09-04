import React from 'react';
import './Dialog.css'
import { NavLink } from 'react-router-dom';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';
function Dialogs(props) {
  return (
 <div className='dialogs'>
   <div className='dialog'>
    {props.dialogsPage.dialogsData.map((element)=><DialogsItem name={element.name} id={element.id}/>)}
   </div>
    <div className='messages'>
     {props.dialogsPage.messagesData.map((element)=><Message message={element.message} id={element.id}/>)}
    </div>
   <div className='send_message'>
    <input placeholder='Введите сообшение' type='text'/>
    <button>Отправить</button>
   </div>
 </div>
  );
}

export default Dialogs;
