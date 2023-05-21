import React from 'react';
import "./Post.css";

export default function Post(props) {

    return (
        <div className="post-item">
            <div className="post-item__wrapper">
                <div className="post-item__image"></div>
                <div className="post-item__likes">
                    <div className="post-item__button">like</div>
                    <span className="post-item__quantity">{props.likes}</span>
                </div>
            </div>
            
            <div className="post-item__text">{props.text}</div>
        </div>
    )
}
