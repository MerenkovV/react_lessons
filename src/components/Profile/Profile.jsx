import React from 'react';
import "./Profile.css";
import Post from './Post/Post';

export default function Profile(props) {

    

    let postElements = props.posts.map( post => <Post text={post.text} likes={post.likes}/>);

    return (
        <main className="main">
            <div className="main__head">
                <div className="main__profile-head"></div>
            </div>
            <div className="main__profile">
                <div className="main__profile-image"></div>
                <div className="main__profile-content">
                    <h2 className="main__profile-name high-text">Vladislav M.</h2>
                    <span className="main__profile-info">
                        <p>Date of birth: 02 july</p>
                        <p>City: Tomsk</p>
                        <p>Education: TPU</p>
                        <p>WebSite: <a target='_blank' href="https://github.com/MerenkovV">MerenkovV</a></p>
                    </span>
                </div>
            </div>
            <div className="main__posts">
                <h2 className="main__post-header high-text">My Posts</h2>
                <textarea placeholder='Your news...' type="text" className="main__input" />
                <button className="main__button">Send</button>
                <div className="main__posts-wrapper">
                    {postElements}
                </div>
            </div>
        </main>
    )
}
