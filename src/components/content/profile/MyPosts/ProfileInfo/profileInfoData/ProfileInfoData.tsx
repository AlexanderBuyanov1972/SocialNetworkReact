import React from "react";
import Contact from '../contact/Contact'
import { ProfileType, ContactsType } from "../../../../../../types/types";

type ProfieIsOwnerActivateEditModeType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileInfoData: React.FC<ProfieIsOwnerActivateEditModeType> = ({ profile, isOwner, activateEditMode }) => {
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
                <div>
                    <b>My professionals skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Abuot me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as  keyof ContactsType]} />
                })}
            </div>
        </div>
    );
}
export default ProfileInfoData;