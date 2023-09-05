import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={s.header}>
        <div className={s.header__image}></div>
        <div className={s.login}>{props.isAuthorized ? <span>{props.login}</span> : <NavLink to={'/login'}>login</NavLink>}</div>
    </header>
  )
}
