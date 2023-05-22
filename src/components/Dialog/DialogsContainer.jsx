import React from 'react'
import Dialogs from './Dialogs'
import { AddMessageActionCreator } from '../../redux/DialogsPageReducer'


export default function DialogsContainer(props) {

  let AddMess = (Text) => {
    props.store.dispatch(AddMessageActionCreator(Text));
  }

  return (
    <Dialogs AddMess={AddMess} dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages}/>
  )
}
