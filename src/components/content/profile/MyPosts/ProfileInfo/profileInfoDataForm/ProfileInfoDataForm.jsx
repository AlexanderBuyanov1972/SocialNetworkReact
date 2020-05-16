import React from "react";
import Contact from '../contact/Contact';
import { createField, Input, Textarea } from '../../../../../../utils/formsControls/FormsControls'
import { reduxForm } from "redux-form";

const ProfileInfoDataForm = ({ profile, isOwner, deactivateEditMode }) => {

    return (
        <form>
            {isOwner && <div>
                <button onClick={deactivateEditMode}>Save Profile</button>
            </div>}
            <div>
                <b>Full name</b>:
                 {createField(Input, 'fullName', 'full name', [], null, '')}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField('input', 'lookingFrAJob', '', [], { type: "checkbox" }, '')}
            </div>
            <div>
                <b>My professionals skills</b>:
                {createField(Textarea, 'lookingForAJobDescription', "My professionals skills", [], null, '')}
            </div>
            <div>
                <b>Abuot me</b>:
                {createField(Textarea, 'aboutMe', 'Abuot me', [], null, '')}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </form>
    );
}

const ProfileInfoDataFormRedux = reduxForm({ form: 'profile' })(ProfileInfoDataForm);

export default ProfileInfoDataFormRedux;