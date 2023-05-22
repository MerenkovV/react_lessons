import React from 'react';
import { AddPostActionCreator } from '../../redux/ProfilePageReducer';
import Profile from './Profile';



export default function ProfileContainer(props) {

    const SendMes = (text) => {
        props.store.dispatch(AddPostActionCreator(text));
    };

    return (
        <Profile SendMes={SendMes} posts={props.store.getState().profilePage.posts}/>
    )
}
