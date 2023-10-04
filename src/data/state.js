import avatar from '../img/Elon_mask.jpg';

let store={
   _state:{
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
   },
   getState(){
      return this._state;
   },
/*
   addPost(postText){
       let newPost={
           text:postText,
           id:4,
           likes:0
       }
     this._state.profilePage.postsData.unshift(newPost);
    this._state.profilePage.newPostText="";
    this.renderTree(this._state);
   },
    sendMessage (message){
        let newMessage={
           message:message,
           id:4
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText="";
        this.renderTree( this._state);
   },
    onPostChange (text){
      this._state.profilePage.newPostText=text;
      this.renderTree( this._state);
    },
     onMessageChange (text){
      this._state.dialogsPage.newMessageText=text;
      this.renderTree( this._state);
    },
*/
    renderTree(){
       console.log("fake function");
    },
     subscribe(observer){
       this.renderTree=observer;
    },
    dispatch (action){
      if(action.type=='ADD-POST'){
         let newPost={
            text:this._state.profilePage.newPostText,
            id:4,
            likes:0
        }
     this._state.profilePage.postsData.unshift(newPost);
     this._state.profilePage.newPostText="";
     this.renderTree(this._state);
      } 
      else if(action.type=='POST-CHANGE'){
         this._state.profilePage.newPostText=action.text;
         this.renderTree( this._state);
      }
      else if(action.type=='SEND-MESSAGE'){
         let newMessage={
            message:this._state.dialogsPage.newMessageText,
            id:4
         }
         this._state.dialogsPage.messagesData.push(newMessage);
         this._state.dialogsPage.newMessageText="";
         this.renderTree( this._state);
      }
      else if(action.type=='MESSAGE-CHANGE'){
         this._state.dialogsPage.newMessageText=action.text;
         this.renderTree( this._state);
      }
    }
}
export default store;
