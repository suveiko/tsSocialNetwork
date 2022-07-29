import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {useAppSelector} from "../../../../../hooks/hooks";

import {updateStatus} from "../../../../../store/profileReducer/profileReducer";
import {getProfileStatus} from "../../../../../store/profileReducer/profileSelectors";


export const ProfileStatus = () => {
    const dispatch = useDispatch()
    const status = useAppSelector(getProfileStatus)

    const [editMode, setEditMode] = useState<boolean>(true)
    const [newStatus, setNewStatus] = useState<string>(status)

    const activateEditMode = () => setEditMode(false)
    const deactivateEditMode = () => {
        setEditMode(true)
        dispatch(updateStatus(newStatus))
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    return (
        <div>
            {
                editMode
                    ? <div>
                            <span
                                onDoubleClick={activateEditMode}
                            >
                                {status || 'No status'}
                            </span>
                    </div>
                    : <div>
                        <input
                            value={newStatus}
                            onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                            autoFocus
                        />
                    </div>
            }
        </div>
    )
}

