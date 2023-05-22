import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


let renderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App/>
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store);
store.subscribe(() => {
  renderEntireTree(store);
});

