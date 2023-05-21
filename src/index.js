import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { AddMessage, AddPost, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));


let renderEntireTree = (state) => {
  root.render(
<React.StrictMode>
  <App state={state} AddPost={AddPost} AddMessage={AddMessage}/>
</React.StrictMode>
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);

