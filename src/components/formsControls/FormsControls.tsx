import React from 'react';
import styles from './FormsControls.module.css';
import { Field, WrappedFieldProps } from 'redux-form';
import { FieldvalidatorType } from '../../utils/validators/validators';
import { RequestLoginType } from '../../types/types';

const FormControl: React.FC<WrappedFieldProps> = ({ meta, children }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
    return <FormControl {...props}><textarea {...props.input} /></FormControl>

};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
    return <FormControl {...props}><input {...props.input} /></FormControl>
};


export function createField<T extends string>
    (component: React.FC<WrappedFieldProps> | string,
        name: T,
        placeholder: string | undefined,
        validates: Array<FieldvalidatorType> | undefined,
        props = {},
        text = "") {
    return <div>
        <Field component={component} name={name} placeholder={placeholder} validate={validates} {...props} />{text}
    </div>
}