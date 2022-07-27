import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {FormDataType} from "../Dialogs";
import {TextArea} from "../../../common/FormsControls/FormControls";
import {MaxLengthCreator, required} from "../../../../utils/validators/validators";

import s from "../Dialogs.module.css";


type DialogFormType = {
    onSubmit: (formData: FormDataType) => void
} & FormDataType


const maxLength30 = MaxLengthCreator(30)


const DialogForm: FC<InjectedFormProps<DialogFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={TextArea}
                name='newMessageBody'
                placeholder='Enter your message'
                validate={[required, maxLength30]}
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