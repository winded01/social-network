import React from 'react';
import './Dialog.css'
import { NavLink } from 'react-router-dom';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';
let dialogNames=[{name:'Иван Иванов', id:1},{name:'Дональд Трамп', id:2},{name:'Билл Гейтс', id:3}];
let messageItems=[{message:'Hello world',id:1},{message:'Hello',id:2},{message:'Hi',id:3},{message:'Hi',id:3},{message:'Hi',id:3},{message:'Hi',id:3}];
function Dialogs(props) {
  return (
 <div className='dialogs'>
   <div className='dialog'>
    {dialogNames.map((element)=><DialogsItem name={element.name} id={element.id}/>)}
   </div>
    <div className='messages'>
      {messageItems.map((element)=><Message message={element.message} id={element.id}/>)}
    </div>
   <div className='send_message'>
    <input placeholder='Введите сообшение' type='text'/>
    <button>Отправить</button>
   </div>
 </div>
  );
}

export default Dialogs;
