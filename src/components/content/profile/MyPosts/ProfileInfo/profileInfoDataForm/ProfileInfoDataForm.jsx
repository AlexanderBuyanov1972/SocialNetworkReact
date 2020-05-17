import React from "react";
import { createField, Input, Textarea } from '../../../../../../utils/formsControls/FormsControls'
import { reduxForm } from "redux-form";
import styles from './ProfileInfoDataForm.module.css';

const ProfileInfoDataForm = ({ profile, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save Profile</button></div>
            <div>
                <b>Full name</b>:
                 {createField(Input, 'fullName', 'full name', [], null, '')}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField('input', 'lookingForAJob', '', [], { type: "checkbox" }, '')}
            </div>
            <div>
                <b>My professionals skills</b>:
                {createField(Textarea, 'lookingForAJobDescription', 'My professionals skills', [], {}, '')}
            </div>
            <div>
                <b>Abuot me</b>:
                {createField(Textarea, 'aboutMe', 'Abuot me', [], null, '')}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={styles.contact}>
                        <b>{key}</b>: {createField(Input, "contacts." + key, key, [], {}, '')}
                    </div>
                })}
            </div>
        </form >
    );
}

const ProfileInfoDataFormRedux = reduxForm({ form: 'profile' })(ProfileInfoDataForm);

export default ProfileInfoDataFormRedux;