import React from 'react';
import "../css/Side.css";
import { NavLink } from 'react-router-dom';

export default function Side() {
  return (
    <side className="side">
        <ul className="side__list">
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/dialogs">Message</NavLink></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
    </side>
  )
}
