import React from 'react';
import "../css/Profile.css";
import Post from './Post';

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
                    <Post text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa."/>
                    <Post text="Информационные технологии (от англ. IT, Information technology) — это использование компьютерных систем или устройств для передачи информации. Такими технологиями пользуются не только работники IT-сферы, но и все люди на планете — от CEO в корпорациях до продавцов на индийских рынках."/>
                    <Post text="Человек ежедневно взаимодействует с IT-сферой: хранит, отправляет и скачивает информацию. Мама троих детей, которая добавляет в заметки на iPhone список новогодних подарков, тоже использует информационные технологии."/>
                    <Post text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa."/>
                </div>
            </div>
        </main>
    )
}
