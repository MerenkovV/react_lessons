import React from "react"
import { Navigate } from "react-router-dom"

export const withAuth = (Component) => {
    /*
    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuthorized) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    } //Можно сделать классом или функцией
    */ 

    let RedirectComponent = (props) => {
        if (!props.isAuthorized) return <Navigate to={'/login'} />
        return <Component {...props} />
    }

    return RedirectComponent;
}