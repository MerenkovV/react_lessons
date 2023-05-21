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
          <Side/>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path='/profile/*' element={<Profile posts={props.posts}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
