import React from "react";
import axios from "axios";

import {UsersArrayType} from "../../redux/usersReducer";

import avatar from '../../assets/user-icon.png'
import s from './Users.module.css'


type UsersType = {
    users: UsersArrayType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}


class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {
                        pages.map(p => (
                            <span
                                onClick={() => this.onPageChanged(p)}
                                className={this.props.currentPage === p ? s.selectedPage : s.page}
                            >{p}
                            </span>
                        ))
                    }
                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small !== null ? u.photos.small : avatar}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button
                                    className={s.btnStyle}
                                    onClick={() => this.props.unFollow(u.id)}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    className={s.btnStyle}
                                    onClick={() => this.props.follow(u.id)}
                                >
                                    Follow
                                </button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.cityName"}</div>
                            </span>

                </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Users;