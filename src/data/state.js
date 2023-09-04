let state={
   profilePage:{
    postsData: [
        {text:'hello world', id:'1', likes:8},
        {text:'hello', id:'2', likes:3},
        {text:'im Elon', id:'3', likes:5}
    ]
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

    ]
   },
   friendsPage:{
    friendsData:[
        {name:'Вася',avatar:'1',id:1},
        {name:'Вася',avatar:'2',id:2},
        {name:'Вася',avatar:'3',id:3}

    ]
   }
};
export default state;
