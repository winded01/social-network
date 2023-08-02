import React from 'react';
import './Dialog.css'
function Dialogs() {
  return (
 <div className='dialogs'>
   <div className='dialog'>
     <a>Иван Иванов</a>
     <a>Дональд Трамп</a>
     <a>Билл Гейтс</a>
   </div>
   <div className='message'>
     <p>Привет, как дела?</p>
     <p>Го завтра на Марс</p>
     <p>Жду мой новый чип</p>
   </div>
   <div className='send_massage'>
    <input type='text'/>
    <button>Отправить</button>
   </div>
 </div>
  );
}

export default Dialogs;
