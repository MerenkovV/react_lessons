import React from 'react';
import './css/style.css';
import './css/nullstyle.css';
import Header from './components/Header';
import Side from './components/Side';
import Profile from './components/Profile';


function App() {
  return (
        <div className="container">
          <Header/>
          <Side/>
          <Profile/>
        </div>
  );
}

export default App;
