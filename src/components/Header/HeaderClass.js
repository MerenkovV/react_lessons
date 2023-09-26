import React from 'react'
import Header from "./Header";
import { connect } from 'react-redux';
import {authCheck, LoginingOutProfile} from '../../redux/authReducer.ts'

class HeaderClass extends React.Component {

    componentDidMount() {
        this.props.authCheck()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized,
    }
}

const HeaderContainer = connect(mapStateToProps, {authCheck, LoginingOutProfile})(HeaderClass);

export default HeaderContainer;