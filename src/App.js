import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialog';
import Friends from './components/friends/Friends';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App(props) {
  return (
 <div className='wrapper'>
  <BrowserRouter>
  <Header /> 
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Profile profilePage={props.state.profilePage}/>}/>
    <Route exact path='/profile'element={<Profile profilePage={props.state.profilePage}/>}/>
    <Route exact path='/friends'element={<Friends friendsPage={props.state.friendsPage}/>}/>
    <Route exact path='/dialogs'element={<Dialogs dialogsPage={props.state.dialogsPage} />}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
