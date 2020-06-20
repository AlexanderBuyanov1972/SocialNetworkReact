import React from "react"
import { createField, Input, Textarea } from '../../../../../../utils/formsControls/FormsControls'
import { reduxForm, InjectedFormProps } from "redux-form"
import styles from './ProfileInfoDataForm.module.css'
import { ProfileType, ContactsType } from "../../../../../../types/types"

type PropsType = { profile: ProfileType }

type CreateProfileFieldNamesType = Extract<keyof ProfileType, string>
type CreateContactsFieldNamesType = Extract<keyof ContactsType, string>

const ProfileInfoDataForm: React.FC<InjectedFormProps<ProfileType & ContactsType, PropsType, string> & PropsType> =

    ({ profile, handleSubmit, error }) => {
        console.log("ERROR==========>" + error);
        return (
            <form onSubmit={handleSubmit}>
                <div><button>Save Profile</button></div>
                {error &&
                    <div className={styles.formSummaryError}>
                        {error}
                    </div>}
                <div>
                    <b>Full name</b>:
                 {createField<CreateProfileFieldNamesType>(Input, 'fullName', 'full name', [], undefined, '')}
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
                {createField(Textarea, 'aboutMe', 'Abuot me', [], undefined, '')}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={styles.contact}>
                            <b>{key}</b>: {createField<CreateContactsFieldNamesType>(Input, "contacts." + key, key, [], {}, '')}
                        </div>
                    })}
                </div>
            </form >
        );
    }

export default reduxForm<ProfileType & ContactsType, PropsType, string>({ form: 'edit-profile' })(ProfileInfoDataForm);