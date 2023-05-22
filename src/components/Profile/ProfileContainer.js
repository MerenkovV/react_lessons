import React from 'react';
import { AddPostActionCreator } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import StoreContext from '../../StoreContext';



export default function ProfileContainer() {
    return <StoreContext.Consumer>
        {
            (store) => {
                const SendMes = (text) => {
                    store.dispatch(AddPostActionCreator(text));
                };
                return (
                    <Profile SendMes={SendMes} posts={store.getState().profilePage.posts} />
                )
            }
        }
    </StoreContext.Consumer>
}
