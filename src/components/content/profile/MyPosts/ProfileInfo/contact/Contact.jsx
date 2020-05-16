import React from 'react';
import styles from './Contact.module.css'

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={styles.contact}>
        <b>{contactTitle}</b>: {contactValue ? contactValue : '-----'}
    </div>
}

export default Contact;