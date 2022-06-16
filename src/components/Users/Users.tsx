import {v1} from "uuid";

import {UsersArrayType} from "../../redux/usersReducer";

import avatar from '../../assets/user-icon.png'

import s from './Users.module.css'


type UsersType = {
    users: UsersArrayType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

export const Users = ({users, follow, unFollow, setUsers}: UsersType) => {

    users.length === 0 && setUsers([
        {
            id: v1(),
            photoUrl: avatar,
            followed: true,
            name: 'Sasha',
            description: 'Hello',
            location: {country: 'Georgia', cityName: 'Tbilisi'}
        },
        {
            id: v1(),
            photoUrl: avatar,
            followed: true,
            name: 'Katya',
            description: 'Hello',
            location: {country: 'Belarus', cityName: 'Minsk'}
        },
        {
            id: v1(),
            photoUrl: avatar,
            followed: true,
            name: 'Kirill',
            description: 'Im a boss',
            location: {country: 'Ukraine', cityName: 'Kiev'}
        },
        {
            id: v1(),
            photoUrl: avatar,
            followed: false,
            name: 'Anton',
            description: 'Hello',
            location: {country: 'Georgia', cityName: 'Tbilisi'}
        }])

    return (
        <span>
            {users.map((u, i) => <div key={i}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button className={s.btnStyle} onClick={() => unFollow(u.id)}>Unfollow</button>
                                : <button className={s.btnStyle} onClick={() => follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.description}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.cityName}</div>
                    </span>
                </span>
            </div>)}
        </span>
    )
}
