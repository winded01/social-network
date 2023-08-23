import React from 'react';
import './Dialog.css'
import { NavLink } from 'react-router-dom';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';
function Dialogs() {
  return (
 <div className='dialogs'>
   <div className='dialog'>
    <DialogsItem name={'Иван Иванов'} id={'1'}/>
    <DialogsItem name={'Дональд Трамп'} id={'2'}/>
    <DialogsItem name={'Билл Гейтс'} id={'3'}/>
   </div>
    <div className='messages'>
      <Message message={'Hello world'}/>
      <Message message={'Hello'}/>
    </div>
   <div className='send_message'>
    <input placeholder='Введите сообшение' type='text'/>
    <button>Отправить</button>
   </div>
 </div>
  );
}

export default Dialogs;
