import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import {Input} from '../../../components/formsControls/FormsControls';

const max = 15;
const min = 2;

const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
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
            <div><Field component={Input} name={'login'} placeholder={"login"}
             validate={[required, minLength, maxLength]}/></div>
            <div><Field component={Input} name={'password'} placeholder={"password"} 
             validate={[required, minLength, maxLength]}/></div>
            <div><Field component={'input'} name={'rememberMe'} type={"checkbox"} />remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>);
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);




export default Login;