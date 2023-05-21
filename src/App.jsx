import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header/Header';
import Side from './components/Side/Side';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialog/Dialogs';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid">
          <Header />
          <Side state={props.state.sidebar}/>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} AddPost={props.AddPost}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
