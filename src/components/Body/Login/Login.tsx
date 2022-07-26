import {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {LoginReduxForm} from "./LoginForm/LoginForm";
import {logMe} from "../../../store/authReducer";
import {StoreType} from "../../../store/redux-store";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type PropsType = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>


const Login = ({logMe, isAuth}: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        logMe(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {logMe}


export default connect(mapStateToProps, mapDispatchToProps)(Login as FC)
