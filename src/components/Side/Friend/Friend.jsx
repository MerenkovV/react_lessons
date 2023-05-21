import React from 'react'

export default function Friend(props) {
    return (
        <div className="friend">
            <div className="friend__image"></div>
            <p className="friend__name">{props.name}</p>
        </div>
    )
}
