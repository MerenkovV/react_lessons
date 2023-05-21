import React from 'react'
import "./DialogItem.css"

export default function DialogItem(props) {
    if (props.name === "Me") {
        return (
        <div className="main__item item">
            <div className="item__person">
                <div className="item__image"></div>
                <span className='item__name'>{props.name}</span>
            </div>
            <p className="item__text">{props.text}</p>
        </div>
    )
    }else{
        return (
            <div className="main__item item">
                <p className="item__text">{props.text}</p>
                <div className="item__person">
                    <div className="item__image"></div>
                    <span className='item__name'>{props.name}</span>
                </div>
            </div>
        )
    }
    
}
