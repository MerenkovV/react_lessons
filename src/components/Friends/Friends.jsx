import React from 'react'
import module from "./Friends.module.css";
import FriendItem from './FriendItem/FriendItem';

export default function Friends(props) {

    let friendsElements = props.friends.map((friend, index) => {
    return(<FriendItem ChangeFollow={props.ChangeFollow} follow={friend.follow} id={index+1} name={friend.name} about={friend.about} country={friend.country} city={friend.city} />);});

    return (
        <main className={module.main}>
            <h2 className={module.main__header}>Friends</h2>
            <div className={module.wrapper}>
                {friendsElements}
            </div>
        </main>
    )
}
