import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialog';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App(props) {
  return (
 <div className='wrapper'>
  <BrowserRouter>
  <Header /> 
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Profile  postsData={props.state.postsData}/>}/>
    <Route exact path='/profile'element={<Profile postsData={props.state.postsData}/>}/>
    <Route exact path='/dialogs'element={<Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData}/>}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
