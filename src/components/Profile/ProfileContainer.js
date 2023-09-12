import React from 'react';
import { SendMes, loadUserProfile, putStatus } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withAuth} from '../../hoc/withAuth';
import { compose } from 'redux';
import { getProfileInfo } from '../../redux/users-selectors';

class ProfileClass extends React.Component{

    componentDidMount() {
            this.props.loadUserProfile(this.props.profile.id)
    }

    render(){
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileInfo(state),
    }
};

export default compose(
    connect(mapStateToProps, {SendMes, loadUserProfile, putStatus}),
    withAuth
)(ProfileClass);
