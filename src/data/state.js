import { render } from '@testing-library/react';
import avatar from '../img/Elon_mask.jpg';
import renderTree from '../render';
let state={
   profilePage:{
    postsData: [
        {text:'hello world', id:'1', likes:8},
        {text:'hello', id:'2', likes:3},
        {text:'im Elon', id:'3', likes:5}
    ],
    newPostText:""
   },
   dialogsPage:{
    dialogsData:[
        {name:'Иван Иванов', id:1},
        {name:'Дональд Трамп', id:2},
        {name:'Билл Гейтс', id:3}
    ],
    messagesData:[
        {message:'Hello world',id:1},
        {message:'Hello',id:2},
        {message:'Hi',id:3}

    ],
    newMessageText:""
   },
   friendsPage:{
    friendsData:[
        {name:'Вася', avatar:avatar, id:1},
        {name:'Петя', avatar:avatar, id:2},
        {name:'Иван', avatar:avatar, id:3}

    ]
   }
};
export default state;
export let addPost=(postText)=>{
    let newPost={
        text:postText,
        id:4,
        likes:0
    }
 state.profilePage.postsData.unshift(newPost);
 state.profilePage.newPostText="";
 renderTree(state);
// console.log(state);
}
export let sendMessage=(message)=>{
     let newMessage={
        message:message,
        id:4
     }
     state.dialogsPage.messagesData.push(newMessage);
     state.dialogsPage.newMessageText="";
     renderTree(state);
}
 export let onPostChange=(text)=>{
    state.profilePage.newPostText=text;
    renderTree(state);
 }
 export let onMessageChange=(text)=>{
    state.dialogsPage.newMessageText=text;
    renderTree(state);
 }