import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {
    getCurrentPage, getIsFetching,
    getPageSize, getTotalUserCount, getUsers
} from "../../../store/usersReducer/usersSelectors";
import {onChangeUsers, requestUsers} from "../../../store/usersReducer/usersReducer";

import User from "./User/User";

import Preloader from "../../common/Preloader/Preloader";

import s from './Users.module.css'


const Users = () => {

    const isFetching = useAppSelector(getIsFetching)
    const users = useAppSelector(getUsers)
    const currentPage = useAppSelector(getCurrentPage)
    const pageSize = useAppSelector(getPageSize)
    const totalUsersCount = useAppSelector(getTotalUserCount)

    const dispatch = useAppDispatch()

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    const onPageChanged = (page: number) => dispatch(onChangeUsers(page, pageSize))

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [dispatch])

    return (
        <div className={s.container}>
            {
                isFetching
                    ? <Preloader/>
                    : <div>
                        <div>
                            {
                                pages.map(p => (
                                    <span
                                        key={`${currentPage}-${p}`}
                                        onClick={() => onPageChanged(p)}
                                        className={currentPage === p ? s.selectedPage : s.page}
                                    >{p}
                        </span>
                                ))
                            }
                        </div>
                        {
                            users.map(user => <User
                                    key={user.id}
                                    user={user}
                                />
                            )}
                    </div>
            }
        </div>
    );
};

export default Users;