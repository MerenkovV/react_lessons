import React from 'react'
import Dialogs from './Dialogs'
import { AddMessageActionCreator } from '../../redux/DialogsPageReducer'
import StoreContext from '../../StoreContext'


export default function DialogsContainer() {
  return <StoreContext.Consumer>
  {
    (store) => {
  let AddMess = (Text) => {
    store.dispatch(AddMessageActionCreator(Text));
  }

  return (
    <Dialogs AddMess={AddMess} dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages}/>
  )}
  }
  </StoreContext.Consumer>
}
