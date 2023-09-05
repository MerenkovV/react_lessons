import React from 'react';
import "./Profile.css";
import Post from './Post/Post';
import fetch from '../../image/Spinner.svg'



export default function Profile(props) {
    let TextElement = React.createRef();
    const onSendMes = () => {
        let text = TextElement.current.value;
        props.SendMes(text);
        TextElement.current.value = "";
    };
    let postElements = props.profile.posts.map( post => <Post text={post.text} likes={post.likes}/>);

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
            <div className="main__posts">
                <h2 className="main__post-header high-text">My Posts</h2>
                <textarea ref={TextElement} placeholder='Your news...' type="text" className="main__input" />
                <button className="main__button" onClick={onSendMes}>Send</button>
                <div className="main__posts-wrapper">
                    {postElements}
                </div>
            </div>
        </main>
    )
}
