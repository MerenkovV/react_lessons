import React from 'react';
import { SendMes, loadUserProfile } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withAuth} from '../../hoc/withAuth';
import { compose } from 'redux';

class ProfileClass extends React.Component{

    componentDidMount() {
            this.props.loadUserProfile(this.props.profile.id)
    }

    render(){
        debugger
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
    }
};

export default compose(
    connect(mapStateToProps, {SendMes, loadUserProfile}),
    withAuth
)(ProfileClass);
