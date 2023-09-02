import React from 'react';
import { SendMes, LoadProfile, Preloader } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { apiFunctions } from '../../api/api';

class ProfileClass extends React.Component{

    componentDidMount() {
        if(this.props.id !== 29272){
            this.props.Preloader(true);
            apiFunctions.getProfile(this.props.id)
                .then((data) => {
                    this.props.LoadProfile(data)
                    this.props.Preloader(false);
                });
        }else{
            this.props.LoadProfile(null)
        }
    }

    render(){
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info,
        posts: state.profilePage.posts,
        id: state.profilePage.id,
        isFetching: state.profilePage.isFetching
    }
};

const ProfileContainer = connect(mapStateToProps, {SendMes, LoadProfile, Preloader})(ProfileClass);

export default ProfileContainer;
