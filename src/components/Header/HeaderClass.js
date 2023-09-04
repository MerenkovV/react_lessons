import React from 'react'
import Header from "./Header";
import { connect } from 'react-redux';
import {authCheck} from '../../redux/authReducer'
import { apiFunctions } from '../../api/api';

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

const HeaderContainer = connect(mapStateToProps, {authCheck})(HeaderClass);

export default HeaderContainer;