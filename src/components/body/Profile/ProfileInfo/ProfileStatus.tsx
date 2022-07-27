import {ChangeEvent, Component} from "react";
import {Dispatch} from "redux";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}


class ProfileStatus extends Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusType, prevState: { editMode: boolean, status: '' }) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span
                                onDoubleClick={this.activateEditMode}
                            >
                                {this.props.status || 'No status'}
                            </span>
                        </div>
                        : <div>
                            <input
                                value={this.state.status}
                                onBlur={this.deactivateEditMode}
                                onChange={this.onStatusChange}
                                autoFocus
                            />
                        </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;