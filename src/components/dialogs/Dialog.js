import React from 'react';
import './Dialog.css'
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';

let messageText=React.createRef();

function Dialogs(props) {
  let sendMessage=()=>{
    props.sendMessage(messageText.current.value);
  }
   let onMessageChange=()=>{
    props.onMessageChange(messageText.current.value);
   }
  return (
 <div className='dialogs'>
   <div className='dialog'>
    {props.dialogsPage.dialogsData.map((element)=><DialogsItem name={element.name} id={element.id}/>)}
   </div>
    <div className='messages'>
     {props.dialogsPage.messagesData.map((element)=><Message message={element.message} id={element.id}/>)}
    </div>
   <div className='send_message'>
    <input onChange={onMessageChange} value={props.newMessageText} ref={messageText} placeholder='Введите сообшение' type='text'/>
    <button onClick={sendMessage}>Отправить</button>
   </div>
 </div>
  );
}

export default Dialogs;
