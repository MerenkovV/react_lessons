import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header/Header';
import Side from './components/Side/Side';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialog/DialogsContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid">
          <Header />
          <Side state={props.store.getState().sidebar}/>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
            <Route path='/profile/*' element={<ProfileContainer store={props.store}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
