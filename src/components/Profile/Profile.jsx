import React from 'react';
import "./Profile.css";
import Post from './Post/Post';
import fetch from '../../image/Spinner.svg'
import { StatusParagraph } from './StatusParagraph';
import {ProfileFormContainer} from './ProfileForm';



export default function Profile(props) {
    let postElements = props.profile.posts.map( (post, index) => <Post key={index} text={post.text} likes={post.likes}/>);
    let isMyAccount = false
    if(props.auth.userId == props.profile.id) {
        isMyAccount = true
    }
    return (
        <main className="main">
            <div className="main__head">
                <div className="main__profile-head"></div>
            </div>
            <div className="main__profile">
                <img src={props.profile.isFetching ? fetch : props.profile.info.photos.large} className="main__profile-image"></img>
                {props.profile.isFetching ? null :
                <div className="main__profile-content">
                    <h2 className="main__profile-name high-text">{props.profile.info.fullName}</h2>
                    <span className="main__profile-info">
                        <p>About Me: {props.profile.info.aboutMe}</p>
                        <p>{props.profile.info.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</p>
                        <p>О работе: {props.profile.info.lookingForAJobDescription}</p>
                        <p>WebSite: <a target='_blank' href={props.profile.info.contacts.github}>GitHub</a></p>
                    </span>
                </div>
                }
            </div>
            <StatusParagraph putStatus={props.putStatus} status={props.profile.status} isMyAccount={isMyAccount}/>
            <div className="main__posts">
                <h2 className="main__post-header high-text">My Posts</h2>
                <ProfileFormContainer SendMes={props.SendMes}/>
                <div className="main__posts-wrapper">
                    {postElements}
                </div>
            </div>
        </main>
    )
}
