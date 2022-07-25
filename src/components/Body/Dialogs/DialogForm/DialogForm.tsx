import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {FormDataType} from "../Dialogs";

import s from "../Dialogs.module.css";


type DialogFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


const DialogForm: FC<InjectedFormProps<DialogFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field
                component='textarea'
                name='newMessageBody'
                placeholder='Enter your message'
            />
            <button
                className={s.button}
            >
                Add message
            </button>
        </form>
    );
};


export const LoginReduxForm = reduxForm<DialogFormType>({form: 'dialog'})(DialogForm)