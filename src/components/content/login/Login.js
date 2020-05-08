import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Input } from '../../../components/formsControls/FormsControls';
import { connect } from 'react-redux';
import { loginUserThunk } from '../../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../../formsControls/FormsControls.module.css';

const max = 15;
const min = 2;
const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={'email'} placeholder={"email"}
                validate={[required, minLength, maxLength]} /></div>
            <div><Field component={Input} name={'password'} placeholder={"password"} type={"password"}
                validate={[required, minLength, maxLength]} /></div>
            <div><Field component={'input'} name={'rememberMe'} type={"checkbox"} />remember me</div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>);
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = { loginUser: loginUserThunk };

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);