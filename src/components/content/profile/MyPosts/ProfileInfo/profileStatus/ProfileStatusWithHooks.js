import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { setStatus(props.status) }, [props.status]);

    const setEditModeTrue = () => {
        setEditMode(true);
    }
    const setEditModeFalse = () => {
        setEditMode(false);
        props.updateStatusUser(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={setEditModeFalse} />
            </div>}
            {!editMode && <div>
                <span onDoubleClick={setEditModeTrue}>{props.status || 'my status'}</span>
            </div>
            }
        </>
    );
}
export default ProfileStatusWithHooks;