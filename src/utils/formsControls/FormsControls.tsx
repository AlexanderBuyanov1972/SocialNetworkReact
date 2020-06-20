import React, { ComponentType } from 'react';
import styles from './FormsControls.module.css';
import { Field, WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type PropsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<PropsType> = ({ input, meta, ...props }) => {
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

export const Textarea: React.FC<PropsType> = (props) => {
    return (
        <FormControl {...props}><textarea {...props.input} /></FormControl>
    );
};

export const Input: React.FC<PropsType> = (props) => {
    return (
        <FormControl {...props}><input {...props.input} /></FormControl>
    );
};

export const createField = (component: ComponentType<WrappedFieldProps> | string, name: string, placeholder: string,
     validates: any, props = {}, text = "") => {
    return <div>
        <Field component={component} name={name} placeholder={placeholder}
            validate={validates} {...props} />{text}
    </div>
}