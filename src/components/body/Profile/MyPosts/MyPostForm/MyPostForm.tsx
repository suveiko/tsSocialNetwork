import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {FormDataType} from "../MyPosts";

import {MaxLengthCreator, required} from "../../../../../utils/validators/validators";
import {TextArea} from "../../../../common/FormsControls/FormControls";

import s from "../MyPosts.module.css";


type MyPostFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


const maxLength10 = MaxLengthCreator(10)


export const MyPostForm = ({handleSubmit}: InjectedFormProps<MyPostFormType>) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    name='newDialogBody'
                    placeholder='Enter your message'
                    validate={[required, maxLength10]}
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
