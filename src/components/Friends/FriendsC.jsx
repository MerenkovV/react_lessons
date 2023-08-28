import React from 'react'
import module from "./Friends.module.css";
import FriendItem from './FriendItem/FriendItem';
import axios from 'axios';

class Friends extends React.Component {

    constructor(props) {
        super(props)
        if(this.props.friends.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users', {
                params: {
                    count: 10
                }
            }).then((info) => {
                this.props.SetUsers(info.data.items);
            });
        }
    }

    render() {
        let friendsElements = this.props.friends.map((friend, index) => {
            return (<FriendItem ChangeFollow={this.props.ChangeFollow} follow={friend.followed} id={friend.id} name={friend.name} about={friend.about} country={friend.country} city={friend.city} />);
        });

        return (
            <main className={module.main}>
                <h2 className={module.main__header}>Friends</h2>
                <div className={module.wrapper}>
                    {friendsElements}
                </div>
            </main>
        )
    }
}

export default Friends;