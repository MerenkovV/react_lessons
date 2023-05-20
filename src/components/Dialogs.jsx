import React from 'react'
import DialogItem from './DialogItem'
import "../css/Dialogs.css"
import DialogMan from './DialogMan'

export default function () {

  let dialogsData = [
    {id: 1, name: "Vlados"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Viktor"},
  ];

  let messageData = [
    {name: "Vlados", message: "Lorem ipsum dolor sit,sicing elit. Possimus quia hic, quisquam, corporis tempore laborum enim, perspiciatis maxime magnam fuga aperiam? Mollitia quibusdam, provid amet consectetur adipisicing elit. Voluptates minima ea sequi dignissimos blanditiis voluptate eveniet dolorem distinctio rem atque?"},
    {name: "Me", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."},
    {name: "Vlados", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati id fuga officiis doloremque?"},
  ];

  //let dialogElements = dialogsData.map(data => <DialogMan id={data.id} name={data.name}/>);

  return (
    <main className="main">
        <h2 className="main__header">Dialogs</h2>
        <div className="main__wrapper">
            <ul className="main__dialogs">
                {/* {dialogElements} */}
                <DialogMan id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogMan id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogMan id={dialogsData[2].id} name={dialogsData[2].name}/>
            </ul>
            <div className="main__chat">
                <DialogItem name={messageData[0].name} text={messageData[0].message}/>
                <DialogItem name={messageData[1].name} text={messageData[1].message}/>
                <DialogItem name={messageData[2].name} text={messageData[2].message}/>
            </div>
        </div>
    </main>
  )
}
