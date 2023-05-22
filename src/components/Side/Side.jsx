import React from 'react';
import "./Side.css";
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

export default function Side(props) {
  let FriendSet = props.friends.map( friend => <Friend name={friend.name}/>);
  
  return (
    <side className="side">
      <ul className="side__list">
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/dialogs">Message</NavLink></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      <div className="side__friends">
        <h2 className="side__hightext">Friends</h2>
        <div className="side__friend">
          {FriendSet}
        </div>
      </div>
    </side>
  )
}
