import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialog';
import Friends from './components/friendsPage/Friends';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { onMessageChange } from './data/state';

function App(props) {
  return (
 <div className='wrapper'>
  <BrowserRouter>
  <Header /> 
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />}/>
    <Route exact path='/profile'element={<Profile profilePage={props.state.profilePage}  newPostText={props.state.profilePage.newPostText}  dispatch={props.dispatch}/>}/>
    <Route exact path='/friends'element={<Friends friendsPage={props.state.friendsPage}/>}/>
    <Route exact path='/dialogs'element={<Dialogs dialogsPage={props.state.dialogsPage} newMessageText={props.state.dialogsPage.newMessageText} dispatch={props.dispatch}/>}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
