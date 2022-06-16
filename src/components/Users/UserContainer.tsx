import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersArrayType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

export type mapStateToPropsType = {
    users: UsersArrayType[]
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UsersArrayType[]) => dispatch(setUsersAC(users))
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)