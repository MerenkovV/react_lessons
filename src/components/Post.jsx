import React from 'react';
import "../css/Post.css";

export default function Post(props) {
    return (
        <div className="post-item">
            <div className="post-item__image"></div>
            <div className="post-item__text">{props.text}</div>
        </div>
    )
}
