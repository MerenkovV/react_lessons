import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AddPost } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));


export let renderEntireTree = (state) => {
    root.render(
  <React.StrictMode>
    <App state={state} AddPost={AddPost}/>
  </React.StrictMode>
    );
};