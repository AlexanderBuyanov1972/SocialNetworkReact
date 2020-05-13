import React from 'react';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Input } from '../../../components/formsControls/FormsControls';
import { createField } from '../../formsControls/FormsControls';
import { connect } from 'react-redux';
import { loginUserThunk } from '../../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../../formsControls/FormsControls.module.css';

const max = 15;
const min = 2;
const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

const Login = ({loginUser,isAuth}) => {
    const onSubmit = (formData) => {
        loginUser(formData);
    }
    if (isAuth) {
        return <Redirect to={'/profile/' + 7450} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', "email", [required, minLength, maxLength], null, '')}
            {createField(Input, 'password', "password", [required, minLength, maxLength], { type: "password" }, '')}
            {createField('input', 'rememberMe', null, null, { type: "checkbox" }, 'remember me')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div><button>Login</button></div>
        </form>);
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.data.userId
    }
};

let mapDispatchToProps = { loginUser: loginUserThunk };

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);