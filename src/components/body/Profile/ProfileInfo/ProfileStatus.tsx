import {ChangeEvent, useState} from "react";
import {Dispatch} from "redux";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}


export const ProfileStatus = ({updateStatus, status}: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(true)
    const [newStatus, setNewStatus] = useState<string>(status)

    const activateEditMode = () => setEditMode(false)
    const deactivateEditMode = () => {
        setEditMode(true)
        updateStatus(newStatus)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

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

