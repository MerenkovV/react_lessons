import React from 'react'
import DialogItem from './DialogItem'
import "../css/Dialogs.css"

export default function () {
  return (
    <main className="main">
        <h2 className="main__header">Dialogs</h2>
        <div className="main__wrapper">
            <ul className="main__dialogs">
                <li>Man1</li>
                <li>Man2</li>
                <li>Man3</li>
                <li>Man4</li>
                <li>Man5</li>
            </ul>
            <div className="main__chat">
                <DialogItem name="Vlados" text="Lorem ipsum dolor sit,sicing elit. Possimus quia hic, quisquam, corporis tempore laborum enim, perspiciatis maxime magnam fuga aperiam? Mollitia quibusdam, provid amet consectetur adipisicing elit. Voluptates minima ea sequi dignissimos blanditiis voluptate eveniet dolorem distinctio rem atque?"/>
            </div>
        </div>
    </main>
  )
}
