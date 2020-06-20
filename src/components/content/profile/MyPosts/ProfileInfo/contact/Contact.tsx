import React from 'react';
import styles from './Contact.module.css'

type ContactTitleValueType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactTitleValueType> = ({ contactTitle, contactValue }) => {
    return <div className={styles.contact}>
        <b>{contactTitle}</b>: {contactValue ? contactValue : '-----'}
    </div>
}

export default Contact;