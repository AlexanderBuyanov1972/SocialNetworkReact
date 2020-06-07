import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Input } from '../../formsControls/FormsControls';
import { createField } from '../../formsControls/FormsControls';
import { connect } from 'react-redux';
import { loginUserThunk } from '../../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../../formsControls/FormsControls.module.css';
import { RequestLoginType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

const max = 15;
const min = 2;
const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

// ---------------------- LoginForm ---------------------

type LoginPropsType = {
    handleSubmit: any
    error: string
    captchaUrl: string
}

type OwnPropsType = {
   captchaUrl: string
}
// ---------------------  state and dispatch --------------------------
type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string
};

type MapDispatchToPropsType = {
    loginUser: (fd: any) => void
}
// ----------------------------------------------
type CreateFieldNamesType = Extract< keyof RequestLoginType, string>

const LoginForm: React.FC<InjectedFormProps<RequestLoginType, OwnPropsType> & OwnPropsType> = (props: LoginPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<CreateFieldNamesType>(Input, 'email', "email", [required, minLength, maxLength], {}, '')}
            {createField<CreateFieldNamesType>(Input, 'password', "password", [required, minLength, maxLength], { type: "password" }, '')}
            {createField<CreateFieldNamesType>('input', 'rememberMe', undefined, undefined, { type: "checkbox" }, 'remember me')}
            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && createField<CreateFieldNamesType>(Input, 'captcha', 'captcha', [required], {}, '')}
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>);
}

const LoginReduxForm = reduxForm<RequestLoginType, OwnPropsType>({ form: 'login' })(LoginForm);

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.loginUser(formData);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile/' + '7450'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};
let mapDispatchToProps = { loginUser: loginUserThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Login)