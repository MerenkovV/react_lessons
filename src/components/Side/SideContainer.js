import React from 'react';
import Side from './Side';
import StoreContext from '../../StoreContext';

export default function SideContainer() {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();
        return (
          <Side friends={state.sidebar.friends}/>
        )
      }
    }
  </StoreContext.Consumer>
}
