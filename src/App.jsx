import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header/Header';
import SideContainer from './components/Side/SideContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialog/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid">
          <Header />
          <SideContainer/>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/profile/*' element={<ProfileContainer/>} />
            <Route path='/friends/*' element={<FriendsContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
