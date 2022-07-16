import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {FormDataType} from "../Login";


type LoginFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


const LoginForm: FC<InjectedFormProps<LoginFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='Login' component='input' name='login'/>
            </div>
            <div>
                <Field placeholder='password' component='input' name='password'/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='rememberMe'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)
