import React from 'react'

export default function Profile() {
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
            <div className="post-item">
                <div className="post-item__image"></div>
                <div className="post-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.</div>
            </div>
            </div>
        </div>
    </main>
  )
}
