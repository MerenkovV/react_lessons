import React from 'react';
import './css/App.css';
//import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header';
import Side from './components/Side';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';


function App() {
  return (
    <div className="container">
      <Header />
      <Side />
      {/* <Profile /> */}
      <Dialogs/>
      
    </div>
  );
}

export default App;
