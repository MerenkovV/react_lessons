import React from 'react'
import { NavLink } from 'react-router-dom';

export default function DialogMan(props) {
    let userId = `/dialogs/${props.id}`;
  return (
    <li><NavLink to={userId}>{props.name}</NavLink></li>
  )
}
