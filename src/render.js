import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './data/state';
import { sendMessage } from './data/state';
import { onPostChange } from './data/state';
import { onMessageChange } from './data/state';
const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree=(state)=>{
  root.render(
    <React.StrictMode>
      <App  state={state} addPost={addPost} sendMessage={sendMessage} onPostChange={onPostChange} onMessageChange={onMessageChange}/>
    </React.StrictMode>
  );
}


export default renderTree;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
