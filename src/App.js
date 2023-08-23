import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialog';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
function App() {
  return (
 <div className='wrapper'>
  <BrowserRouter>
  <Header /> 
  <Navbar />
  <Routes>
    <Route exact path='/' Component={Profile}/>
  <Route exact path='/profile' Component={Profile}/>
  <Route exact path='/dialogs' Component={Dialogs}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
