import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={s.header}>
        <div className={s.header__image}></div>
        <div className={s.login}>{props.isAuthorized ? <span onClick={() => {props.LoginingOutProfile()}} className={s.logout}>{props.login}</span> : <NavLink to={'/login'}>login</NavLink>}</div>
    </header>
  )
}
