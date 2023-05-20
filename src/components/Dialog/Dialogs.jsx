import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import "./Dialogs.css"
import DialogMan from './DialogMan/DialogMan'

export default function () {

  let dialogs = [
    { id: 1, name: "Vlados" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Viktor" },
  ];

  let messages = [
    { name: "Vlados", message: "Lorem ipsum dolor sit,sicing elit. Possimus quia hic, quisquam, corporis tempore laborum enim, perspiciatis maxime magnam fuga aperiam? Mollitia quibusdam, provid amet consectetur adipisicing elit. Voluptates minima ea sequi dignissimos blanditiis voluptate eveniet dolorem distinctio rem atque?" },
    { name: "Me", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi." },
    { name: "Vlados", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati id fuga officiis doloremque?" },
    { name: "Me", message: "Hey, does it works???))))" },
  ];

  let dialogElements = dialogs.map(data => <DialogMan id={data.id} name={data.name} />);
  let messageElements = messages.map(data => <DialogItem name={data.name} text={data.message} />);

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
