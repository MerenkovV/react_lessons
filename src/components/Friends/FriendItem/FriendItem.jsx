import React from 'react'
import module from "./FriendItem.module.css"
import { NavLink } from 'react-router-dom';
import { apiFunctions } from '../../../api/api';

export default function FriendItem(props) {
    const onFollowClick = () => {
        props.LoadFollow(true, props.info.id)
        if (props.info.followed == false) {
            apiFunctions.addFollow(props.info.id)
                .then((data) => {
                    if(data.resultCode == 0){
                        props.ChangeFriend(props.info.followed, props.info.name, props.info.id, props.info.photos.small)
                        props.ChangeFollow(props.info.followed, props.info.id, props.info.name)
                    }
                    props.LoadFollow(false, props.info.id)
                });
        }else{
            apiFunctions.deleteFollow(props.info.id)
                .then((data) => {
                    if(data.resultCode == 0){
                        props.ChangeFriend(props.info.followed, props.info.name, props.info.id, props.info.photos.small)
                        props.ChangeFollow(props.info.followed, props.info.id, props.info.name)
                    }
                    props.LoadFollow(false, props.info.id)
                });
        }

    };
    let link = `/profile/${props.info.id}`;
    return (
        <div className={module.friendItem}>
            <div className={module.left}>
                <img src={!props.info.photos.small ? "https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640716800_55-abrakadabra-fun-p-smail-cherno-belii-56.jpg" : props.info.photos.small} className={module.image}></img>
                {
                    props.info.followed ?
                        <button disabled={props.isFollowing.some(id=>id == props.info.id)} onClick={onFollowClick} className={module.unfollow}>Unfollow</button> : <button disabled={props.isFollowing.some(id=>id == props.info.id)} onClick={onFollowClick} className={module.follow}>Follow</button>
                }
            </div>
            <div className={module.right}>
                <div className={module.namespace}>
                    <NavLink to={link} onClick={() => { props.ChangeId(props.info.id) }} className={module.name}>{props.info.name}</NavLink>
                    <p className={module.about}>{props.info.about}</p>
                </div>
                <div className={module.place}>
                    <p className={module.country}>{props.info.country}</p>
                    <p className={module.city}>{props.info.city}</p>
                </div>
            </div>

        </div>
    )
}
