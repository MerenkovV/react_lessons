import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import SideContainer from './components/Side/SideContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialog/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderClass';
import {LoginContainer} from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid">
          <HeaderContainer />
          <SideContainer/>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/profile/*' element={<ProfileContainer/>} />
            <Route path='/friends/*' element={<FriendsContainer/>} />
            <Route path='/login/*' element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
