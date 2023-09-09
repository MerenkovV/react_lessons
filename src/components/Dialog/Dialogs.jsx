import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import "./Dialogs.css"
import DialogMan from './DialogMan/DialogMan'
import { DialogFormContainer } from './DialogForm'

export default function Dialogs(props) {

  let dialogElements = props.page.dialogs.map((data, index) => <DialogMan key={index} id={data.id} name={data.name} />);
  let messageElements = props.page.messages.map((data, index) => <DialogItem key={index} name={data.name} text={data.message} />);

  return (
    <main className="main">
      <h2 className="main__header">Dialogs</h2>
      <div className="main__wrapper">
        <ul className="main__dialogs">
          {dialogElements}
        </ul>
        <div className="main__chatwrapper">
        <div className="main__chat">
          {messageElements}
        </div>
        <DialogFormContainer AddMess={props.AddMess}/>
        </div>
      </div>
    </main>
  )
}
