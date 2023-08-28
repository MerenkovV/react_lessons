import React from 'react'
import module from "./FriendItem.module.css"

export default function FriendItem(props) {
    
    const onFollowClick = () => {
        props.ChangeFollow(props.follow, props.id, props.name)
        
    };

    return (
        <div className={module.friendItem}>
            <div className={module.left}>
                <div className={module.image}></div>
                {
                    props.follow ? 
                    <button onClick={onFollowClick} className={module.unfollow}>Unfollow</button> : <button onClick={onFollowClick} className={module.follow}>Follow</button>
                }
            </div>
            <div className={module.right}>
                <div className={module.namespace}>
                    <p className={module.name}>{props.name}</p>
                    <p className={module.about}>{props.about}</p>
                </div>
                <div className={module.place}>
                    <p className={module.country}>{props.country}</p>
                    <p className={module.city}>{props.city}</p>
                </div>
            </div>

        </div>
    )
}
