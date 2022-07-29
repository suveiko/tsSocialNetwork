import {Redirect} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {LoginReduxForm} from "./LoginForm/LoginForm";

import {logMe} from "../../../store/authReducer/authReducer";
import {getLoginAuth} from "../../../store/authReducer/authSelectors";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const isAuth = useAppSelector(getLoginAuth)
    const dispatch = useAppDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(logMe(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login
