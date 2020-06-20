import { AppStateType } from '../redux/redux-store';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state: AppStateType) => ({ isAuth: state.auth.isAuth })
type PropsType = { isAuth: boolean }
type WCP = {}

export const withAuthRedirect = (WrappedComponent: React.ComponentType<WCP>) => {
    const RedirectComponent: React.FC<PropsType> = (props: PropsType) => {
        let { isAuth, ...restProps } = props
        if (!isAuth)
            return <Redirect to="/login"/>
        return <WrappedComponent {...restProps as WCP} />
    }
    return connect<PropsType, {}, WCP, AppStateType>(mapStateToPropsRedirect, {})(RedirectComponent);
}