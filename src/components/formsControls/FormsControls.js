import React from 'react';
import styles from './FormsControls.module.css';

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


// const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
//             <div>
//                 <textarea {...input}{...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     );
// };

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
//             <div>
//                 <input {...input}{...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     );
// };