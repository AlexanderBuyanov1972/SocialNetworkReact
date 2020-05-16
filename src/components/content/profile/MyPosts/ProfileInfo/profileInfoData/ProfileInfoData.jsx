import React from "react";
import Contact from '../contact/Contact'

const ProfileInfoData = ({ profile, isOwner, activateEditMode }) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={activateEditMode}>Edit Profile</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob && <div>
                    <b>My professionals skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Abuot me</b>: {profile.lookingForAJob}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    );
}


export default ProfileInfoData;