import React from 'react'
import "../css/DialogItem.css"

export default function DialogItem(props) {
    return (
        <div className="main__item item">
            <div className="item__person">
                <div className="item__image"></div>
                <span className='item__name'>{props.name}</span>
            </div>
            <p className="item__text">{props.text}</p>
        </div>
    )
}
