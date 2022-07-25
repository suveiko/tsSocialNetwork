import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {Input} from "../../../common/FormsControls/FormControls";

import {FormDataType} from "../Login";
import {required} from "../../../../utils/validators/validators";

import s from "../../../common/FormsControls/FormControls.module.css"


type LoginFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


const LoginForm: FC<InjectedFormProps<LoginFormType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='Login'
                    component={Input}
                    name='email'
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='password'
                    component={Input}
                    name='password'
                    validate={[required]}
                    type='password'
                />
            </div>
            <div>
                <Field
                    type='checkbox'
                    component={Input}
                    name='rememberMe'
                />
                remember me
            </div>
            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)
