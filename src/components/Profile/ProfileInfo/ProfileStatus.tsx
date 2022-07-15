import {Component} from "react";


type ProfileStatusType = {
    status: string
}


class ProfileStatus extends Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>
                        : <div>
                            <input
                                value={this.props.status}
                                onBlur={this.deactivateEditMode}
                                autoFocus
                            />
                        </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;