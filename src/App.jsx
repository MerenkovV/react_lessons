import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header';
import Side from './components/Side';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="grid">
          <Header />
          <Side />
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/profile/*' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
