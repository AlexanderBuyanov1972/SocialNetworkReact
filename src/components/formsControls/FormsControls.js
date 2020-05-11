import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    return (
        <FormControl {...props}><textarea {...props.input} /></FormControl>
    );
};

export const Input = (props) => {
    return (
        <FormControl {...props}><input {...props.input} /></FormControl>
    );
};

export const createField = (component, name, placeholder, validates, props = {}, text = "") => {
    return <div>
        <Field component={component} name={name} placeholder={placeholder}
            validate={validates} {...props}/>{text}
    </div>
}