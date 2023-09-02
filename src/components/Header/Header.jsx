import React from 'react';
import s from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={s.header}>
        <div className={s.header__image}></div>
        <div className={s.login}>{props.isAuthorized ? <span>{props.login}</span> : <a href='#'>login</a>}</div>
    </header>
  )
}
