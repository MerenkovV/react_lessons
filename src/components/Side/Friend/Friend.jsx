import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Friend(props) {

    let link = `/profile/${props.id}`;

    return (
        <div className="friend">
            <NavLink to={link} onClick={()=>{props.ChangeId(props.id)}}>
            <img src={props.picture} className="friend__image"></img>
            <p className="friend__name">{props.name}</p>
            </NavLink>
        </div>
    )
}
