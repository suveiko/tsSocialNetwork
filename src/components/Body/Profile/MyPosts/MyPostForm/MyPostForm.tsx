import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";

import {FormDataType} from "../MyPosts";

import s from "../MyPosts.module.css";


type MyPostFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


export const MyPostForm: FC<InjectedFormProps<MyPostFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newDialogBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button
                    className={s.button}
                >
                    Add post
                </button>
            </div>
        </form>
    )
}


export const MyPostReduxForm = reduxForm<MyPostFormType>({form: 'dialog'})(MyPostForm)
