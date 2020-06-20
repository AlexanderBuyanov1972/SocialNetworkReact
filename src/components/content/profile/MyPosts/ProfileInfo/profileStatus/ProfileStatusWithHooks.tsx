import React, { useState, useEffect } from 'react';

type Propstype = {
    status: string
    updateStatusUser: (str: string) => void
}

const ProfileStatusWithHooks: React.FC<Propstype> = (props:Propstype) => {
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

    const onStatusChange = (e: any )=> {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={setEditModeFalse} />
            </div>}
            {!editMode &&
                <span onDoubleClick={setEditModeTrue}>{props.status || 'my status'}</span>
            }
        </>
    );
}
export default ProfileStatusWithHooks;