import {LoginReduxForm} from "./LoginForm/LoginForm";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const Login = () => {

    const onSubmit = (formData: FormDataType) => console.log(formData)

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login