import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import "./Dialogs.css"
import DialogMan from './DialogMan/DialogMan'

export default function (props) {

  let dialogElements = props.dialogsPage.dialogs.map(data => <DialogMan id={data.id} name={data.name} />);
  let messageElements = props.dialogsPage.messages.map(data => <DialogItem name={data.name} text={data.message} />);

  return (
    <main className="main">
      <h2 className="main__header">Dialogs</h2>
      <div className="main__wrapper">
        <ul className="main__dialogs">
          {dialogElements}
        </ul>
        <div className="main__chat">
          {messageElements}
        </div>
      </div>
    </main>
  )
}
